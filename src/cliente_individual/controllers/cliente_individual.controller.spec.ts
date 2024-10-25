import { Test, TestingModule } from '@nestjs/testing';
import { ClienteIndividualController } from './cliente_individual.controller';
import { ClienteIndividualService } from '../services/cliente_individual.service';
import { DatabaseService } from 'src/database/services/database.service';
import { ConfigModule } from '@nestjs/config';
import { NotFoundException } from '@nestjs/common';

describe('ClienteIndividualController', () => {
  let controller: ClienteIndividualController;
  let service: ClienteIndividualService;
  let databaseService: DatabaseService;
  let cleanDatabase: () => Promise<void>;

  beforeAll(async () => {
    databaseService = new DatabaseService();
    await databaseService.$connect();

    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      controllers: [ClienteIndividualController],
      providers: [ClienteIndividualService, DatabaseService],
    }).compile();

    controller = module.get<ClienteIndividualController>(
      ClienteIndividualController,
    );
    service = module.get<ClienteIndividualService>(ClienteIndividualService);

    cleanDatabase = async () => {
      await databaseService.cliente_individual.deleteMany();
    };
  });

  beforeEach(async () => {
    await cleanDatabase();
  });

  afterAll(async () => {
    await cleanDatabase();
    await databaseService.$disconnect();
  });

  it('should create a cliente individual', async () => {
    const dto = {
      primerNombre: 'Juan',
      segundoNombre: 'Carlos',
      primerApellido: 'Perez',
      segundoApellido: 'Lopez',
      cui: '1234567890123',
      nit: '987654321',
      telefono: '12345678',
      email: 'juan@correo.com',
      direccion: 'Calle 123',
    };

    const result = await controller.create(dto);
    expect(result).toHaveProperty('Id_Cliente');
    expect(result.Primer_Nombre).toBe(dto.primerNombre);
    expect(result.Primer_Apellido).toBe(dto.primerApellido);
    expect(result.Estado).toBe('Activo');
  });

  it('should find all cliente individuales', async () => {
    await databaseService.cliente_individual.create({
      data: {
        Primer_Nombre: 'Juan',
        Segundo_Nombre: 'Carlos',
        Primer_Apellido: 'Perez',
        Segundo_Apellido: 'Lopez',
        Cui: '1234567890123',
        Nit: '987654321',
        Telefono: '12345678',
        Email: 'juan@correo.com',
        Direccion: 'Calle 123',
        Estado: 'Activo',
      },
    });

    const result = await controller.findAll();
    expect(result.length).toBeGreaterThan(0); // Verifica que haya al menos un cliente individual
  });

  it('should find one cliente individual by id', async () => {
    const createdCliente = await databaseService.cliente_individual.create({
      data: {
        Primer_Nombre: 'Juan',
        Segundo_Nombre: 'Carlos',
        Primer_Apellido: 'Perez',
        Segundo_Apellido: 'Lopez',
        Cui: '1234567890123',
        Nit: '987654321',
        Telefono: '12345678',
        Email: 'juan@correo.com',
        Direccion: 'Calle 123',
        Estado: 'Activo',
      },
    });

    const result = await controller.findOne(
      createdCliente.Id_Cliente.toString(),
    );
    expect(result).toBeDefined();
    expect(result.Id_Cliente).toBe(createdCliente.Id_Cliente);
  });

  it('should throw NotFoundException if cliente not found', async () => {
    await expect(controller.findOne('9999')).rejects.toThrow(NotFoundException);
  });

  it('should update a cliente individual', async () => {
    const createdCliente = await databaseService.cliente_individual.create({
      data: {
        Primer_Nombre: 'Juan',
        Segundo_Nombre: 'Carlos',
        Primer_Apellido: 'Perez',
        Segundo_Apellido: 'Lopez',
        Cui: '1234567890123',
        Nit: '987654321',
        Telefono: '12345678',
        Email: 'juan@correo.com',
        Direccion: 'Calle 123',
        Estado: 'Activo',
      },
    });

    const updatedDto = {
      telefono: '87654321',
      email: 'carlos@correo.com',
      direccion: 'Calle 456',
    };

    const result = await controller.update(
      createdCliente.Id_Cliente.toString(),
      updatedDto,
    );
    expect(result.Telefono).toBe(updatedDto.telefono);
    expect(result.Email).toBe(updatedDto.email);
    expect(result.Direccion).toBe(updatedDto.direccion);
  });

  it('should delete a cliente individual', async () => {
    const createdCliente = await databaseService.cliente_individual.create({
      data: {
        Primer_Nombre: 'Juan',
        Segundo_Nombre: 'Carlos',
        Primer_Apellido: 'Perez',
        Segundo_Apellido: 'Lopez',
        Cui: '1234567890123',
        Nit: '987654321',
        Telefono: '12345678',
        Email: 'juan@correo.com',
        Direccion: 'Calle 123',
        Estado: 'Activo',
      },
    });

    const result = await controller.remove(
      createdCliente.Id_Cliente.toString(),
    );
    expect(result).toBeDefined();

    const deletedCliente = await databaseService.cliente_individual.findUnique({
      where: { Id_Cliente: createdCliente.Id_Cliente },
    });
    expect(deletedCliente).toBeNull();
  });
});
