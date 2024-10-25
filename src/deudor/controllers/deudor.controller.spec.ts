import { Test, TestingModule } from '@nestjs/testing';
import { DeudorController } from './deudor.controller';
import { DeudorService } from '../services/deudor.service';
import { DatabaseService } from 'src/database/services/database.service';
import { ConfigModule } from '@nestjs/config';
import { NotFoundException } from '@nestjs/common';

describe('DeudorController', () => {
  let controller: DeudorController;
  let service: DeudorService;
  let databaseService: DatabaseService;
  let cleanDatabase: () => Promise<void>;

  beforeAll(async () => {
    databaseService = new DatabaseService();
    await databaseService.$connect();

    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      controllers: [DeudorController],
      providers: [DeudorService, DatabaseService],
    }).compile();

    controller = module.get<DeudorController>(DeudorController);
    service = module.get<DeudorService>(DeudorService);

    cleanDatabase = async () => {
      await databaseService.deudor.deleteMany();
    };
  });

  beforeEach(async () => {
    await cleanDatabase();
  });

  afterAll(async () => {
    await cleanDatabase();
    await databaseService.$disconnect();
  });

  it('should create a deudor', async () => {
    const dto = {
      primerNombre: 'Juan',
      segundoNombre: 'Carlos',
      primerApellido: 'Pérez',
      segundoApellido: 'López',
      cui: '1234567890123',
      telefono: '12345678',
      direccion: 'Calle Falsa 123',
      lugarTrabajo: 'Empresa X',
      direccionTrabajo: 'Calle Empresa 456',
      telefonoTrabajo: '87654321',
      localizable: 1, // Agregar la propiedad localizable
    };

    const result = await controller.create(dto);
    expect(result).toHaveProperty('Id_Deudor');
    expect(result.Primer_Nombre).toBe(dto.primerNombre);
  });

  it('should find all deudores', async () => {
    await databaseService.deudor.create({
      data: {
        Primer_Nombre: 'Juan',
        Segundo_Nombre: 'Carlos',
        Primer_Apellido: 'Pérez',
        Segundo_Apellido: 'López',
        Cui: '1234567890123',
        Telefono: '12345678',
        Direccion: 'Calle Falsa 123',
        Lugar_Trabajo: 'Empresa X',
        Direccion_Trabajo: 'Calle Empresa 456',
        Telefono_Trabajo: '87654321',
      },
    });

    const result = await controller.findAll();
    expect(result.length).toBeGreaterThan(0);
  });

  it('should find one deudor by id', async () => {
    const createdDeudor = await databaseService.deudor.create({
      data: {
        Primer_Nombre: 'Juan',
        Segundo_Nombre: 'Carlos',
        Primer_Apellido: 'Pérez',
        Segundo_Apellido: 'López',
        Cui: '1234567890123',
        Telefono: '12345678',
        Direccion: 'Calle Falsa 123',
      },
    });

    const result = await controller.findOne(createdDeudor.Id_Deudor.toString());
    expect(result).toBeDefined();
    expect(result.Id_Deudor).toBe(createdDeudor.Id_Deudor);
  });

  it('should throw NotFoundException if deudor not found', async () => {
    await expect(controller.findOne('9999')).rejects.toThrow(NotFoundException);
  });

  it('should update a deudor', async () => {
    const createdDeudor = await databaseService.deudor.create({
      data: {
        Primer_Nombre: 'Juan',
        Primer_Apellido: 'Pérez',
        Cui: '1234567890123',
        Telefono: '12345678',
      },
    });

    const updateDto = {
      telefono: '87654321',
      direccion: 'Nueva Calle 456',
      lugarTrabajo: 'Nueva Empresa',
      direccionTrabajo: 'Nueva Calle Empresa 789',
      telefonoTrabajo: '98765432',
      localizable: 0,
    };

    const result = await controller.update(
      createdDeudor.Id_Deudor.toString(),
      updateDto,
    );
    expect(result.Telefono).toBe(updateDto.telefono);
    expect(result.localizable).toBe(updateDto.localizable);
  });

  it('should delete a deudor', async () => {
    const createdDeudor = await databaseService.deudor.create({
      data: {
        Primer_Nombre: 'Juan',
        Primer_Apellido: 'Pérez',
        Cui: '1234567890123',
      },
    });

    const result = await controller.remove(createdDeudor.Id_Deudor.toString());
    expect(result).toBeDefined();

    const deletedDeudor = await databaseService.deudor.findUnique({
      where: { Id_Deudor: createdDeudor.Id_Deudor },
    });
    expect(deletedDeudor).toBeNull();
  });

  it('should declare deudor as ilocalizable', async () => {
    const createdDeudor = await databaseService.deudor.create({
      data: {
        Primer_Nombre: 'Juan',
        Primer_Apellido: 'Pérez',
        Cui: '1234567890123',
      },
    });

    const result = await controller.declararIlocalizable(
      createdDeudor.Id_Deudor.toString(),
    );
    expect(result.localizable).toBe(0);
  });
});
