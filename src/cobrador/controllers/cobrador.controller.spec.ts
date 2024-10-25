import { Test, TestingModule } from '@nestjs/testing';
import { CobradorController } from './cobrador.controller';
import { CobradorService } from '../services/cobrador.service';
import { DatabaseService } from 'src/database/services/database.service';
import { ConfigModule } from '@nestjs/config';
import { NotFoundException } from '@nestjs/common';

describe('CobradorController', () => {
  let controller: CobradorController;
  let service: CobradorService;
  let databaseService: DatabaseService;
  let createdCartera;

  beforeAll(async () => {
    databaseService = new DatabaseService();
    await databaseService.$connect();

    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      controllers: [CobradorController],
      providers: [CobradorService, DatabaseService],
    }).compile();

    controller = module.get<CobradorController>(CobradorController);
    service = module.get<CobradorService>(CobradorService);

    // Crear una cartera para asociar con los cobradores en las pruebas
    createdCartera = await databaseService.cartera.create({
      data: {
        Nombre: 'Cartera 1',
        Nombre_Contacto: 'Contacto Cartera',
        Telefono: '12345678',
        Email: 'contacto@cartera.com',
        Direccion: 'Direccion Cartera',
      },
    });
  });

  beforeEach(async () => {
    await databaseService.cobrador.deleteMany();
  });

  afterAll(async () => {
    await cleanDatabase();
    await databaseService.$disconnect();
  });

  it('should create a cobrador', async () => {
    const dto = {
      Codigo_Cobrador: 'COB123',
      idCartera: createdCartera.Id_Cartera,
      primerNombre: 'Juan',
      primerApellido: 'Perez',
      cui: '1234567890123',
      estado: 'Activo',
    };

    const result = await controller.create(dto);
    expect(result).toHaveProperty('Id_Cobrador');
    expect(result.Codigo_Cobrador).toBe(dto.Codigo_Cobrador);
    expect(result.Primer_Nombre).toBe(dto.primerNombre);
  });

  it('should find all cobradores', async () => {
    await databaseService.cobrador.create({
      data: {
        Codigo_Cobrador: 'COB123',
        cartera: { connect: { Id_Cartera: createdCartera.Id_Cartera } },
        Primer_Nombre: 'Juan',
        Primer_Apellido: 'Perez',
        Cui: '1234567890123',
        Estado: 'Activo',
      },
    });

    const result = await controller.findAll();
    expect(result.length).toBeGreaterThan(0);
  });

  it('should find one cobrador by id', async () => {
    const createdCobrador = await databaseService.cobrador.create({
      data: {
        Codigo_Cobrador: 'COB123',
        cartera: { connect: { Id_Cartera: createdCartera.Id_Cartera } },
        Primer_Nombre: 'Juan',
        Primer_Apellido: 'Perez',
        Cui: '1234567890123',
        Estado: 'Activo',
      },
    });

    const result = await controller.findOne(
      createdCobrador.Id_Cobrador.toString(),
    );
    expect(result).toBeDefined();
    expect(result.Id_Cobrador).toBe(createdCobrador.Id_Cobrador);
  });

  it('should throw NotFoundException if cobrador not found', async () => {
    await expect(controller.findOne('9999')).rejects.toThrow(NotFoundException);
  });

  it('should update a cobrador', async () => {
    const createdCobrador = await databaseService.cobrador.create({
      data: {
        Codigo_Cobrador: 'COB123',
        cartera: { connect: { Id_Cartera: createdCartera.Id_Cartera } },
        Primer_Nombre: 'Juan',
        Primer_Apellido: 'Perez',
        Cui: '1234567890123',
        Estado: 'Activo',
      },
    });

    const updateDto = {
      telefono: '87654321',
      email: 'juan@correo.com',
    };

    const result = await controller.update(
      createdCobrador.Id_Cobrador.toString(),
      updateDto,
    );
    expect(result.Telefono).toBe(updateDto.telefono);
    expect(result.Email).toBe(updateDto.email);
  });

  it('should delete a cobrador', async () => {
    const createdCobrador = await databaseService.cobrador.create({
      data: {
        Codigo_Cobrador: 'COB123',
        cartera: { connect: { Id_Cartera: createdCartera.Id_Cartera } },
        Primer_Nombre: 'Juan',
        Primer_Apellido: 'Perez',
        Cui: '1234567890123',
        Estado: 'Activo',
      },
    });

    const result = await controller.remove(
      createdCobrador.Id_Cobrador.toString(),
    );
    expect(result).toBeDefined();

    const deletedCobrador = await databaseService.cobrador.findUnique({
      where: { Id_Cobrador: createdCobrador.Id_Cobrador },
    });
    expect(deletedCobrador).toBeNull();
  });

  it('should find all cobradores by cartera', async () => {
    await databaseService.cobrador.create({
      data: {
        Codigo_Cobrador: 'COB123',
        cartera: { connect: { Id_Cartera: createdCartera.Id_Cartera } },
        Primer_Nombre: 'Juan',
        Primer_Apellido: 'Perez',
        Cui: '1234567890123',
        Estado: 'Activo',
      },
    });

    const result = await controller.findAllByCartera(
      createdCartera.Id_Cartera.toString(),
    );
    expect(result.length).toBeGreaterThan(0);
  });
});
