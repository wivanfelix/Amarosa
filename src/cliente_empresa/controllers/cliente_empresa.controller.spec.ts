import { Test, TestingModule } from '@nestjs/testing';
import { ClienteEmpresaController } from './cliente_empresa.controller';
import { ClienteEmpresaService } from '../services/cliente_empresa.service';
import { DatabaseService } from 'src/database/services/database.service';
import { ConfigModule } from '@nestjs/config';
import { NotFoundException } from '@nestjs/common';

describe('ClienteEmpresaController', () => {
  let controller: ClienteEmpresaController;
  let service: ClienteEmpresaService;
  let databaseService: DatabaseService;
  let cleanDatabase: () => Promise<void>;

  beforeAll(async () => {
    databaseService = new DatabaseService();
    await databaseService.$connect();

    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      controllers: [ClienteEmpresaController],
      providers: [ClienteEmpresaService, DatabaseService],
    }).compile();

    controller = module.get<ClienteEmpresaController>(ClienteEmpresaController);
    service = module.get<ClienteEmpresaService>(ClienteEmpresaService);

    cleanDatabase = async () => {
      await databaseService.cliente_empresa.deleteMany();
    };
  });

  beforeEach(async () => {
    await cleanDatabase();
  });

  afterAll(async () => {
    await cleanDatabase();
    await databaseService.$disconnect();
  });

  it('should create a cliente empresa', async () => {
    const dto = {
      razonSocial: 'Empresa X',
      nombreComercial: 'Comercial X',
      nit: '123456789',
      nombreContacto: 'Juan Pérez',
      telefono: '12345678',
      email: 'juan@empresa.com',
      direccion: 'Calle 123',
      estado: 'Activo',
    };

    const result = await controller.create(dto);
    expect(result).toHaveProperty('Id_Cliente');
    expect(result.Razon_Social).toBe(dto.razonSocial);
    expect(result.Nombre_Comercial).toBe(dto.nombreComercial);
    expect(result.Estado).toBe(dto.estado);
  });

  it('should find all cliente empresas', async () => {
    await databaseService.cliente_empresa.create({
      data: {
        Razon_Social: 'Empresa X',
        Nombre_Comercial: 'Comercial X',
        Nit: '123456789',
        Nombre_Contacto: 'Juan Pérez',
        Telefono: '12345678',
        Email: 'juan@empresa.com',
        Direccion: 'Calle 123',
        Estado: 'Activo',
      },
    });

    const result = await controller.findAll();
    expect(result.length).toBeGreaterThan(0); // Verifica que haya al menos un cliente empresa
  });

  it('should find one cliente empresa by id', async () => {
    const createdCliente = await databaseService.cliente_empresa.create({
      data: {
        Razon_Social: 'Empresa X',
        Nombre_Comercial: 'Comercial X',
        Nit: '123456789',
        Nombre_Contacto: 'Juan Pérez',
        Telefono: '12345678',
        Email: 'juan@empresa.com',
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

  it('should update a cliente empresa', async () => {
    const createdCliente = await databaseService.cliente_empresa.create({
      data: {
        Razon_Social: 'Empresa X',
        Nombre_Comercial: 'Comercial X',
        Nit: '123456789',
        Nombre_Contacto: 'Juan Pérez',
        Telefono: '12345678',
        Email: 'juan@empresa.com',
        Direccion: 'Calle 123',
        Estado: 'Activo',
      },
    });

    const updatedDto = {
      nombreContacto: 'Pedro López',
      telefono: '87654321',
      email: 'pedro@empresa.com',
      direccion: 'Calle 456',
    };

    const result = await controller.update(
      createdCliente.Id_Cliente.toString(),
      updatedDto,
    );
    expect(result.Nombre_Contacto).toBe(updatedDto.nombreContacto);
    expect(result.Telefono).toBe(updatedDto.telefono);
    expect(result.Email).toBe(updatedDto.email);
  });

  it('should delete a cliente empresa', async () => {
    const createdCliente = await databaseService.cliente_empresa.create({
      data: {
        Razon_Social: 'Empresa X',
        Nombre_Comercial: 'Comercial X',
        Nit: '123456789',
        Nombre_Contacto: 'Juan Pérez',
        Telefono: '12345678',
        Email: 'juan@empresa.com',
        Direccion: 'Calle 123',
        Estado: 'Activo',
      },
    });

    const result = await controller.remove(
      createdCliente.Id_Cliente.toString(),
    );
    expect(result).toBeDefined();

    const deletedCliente = await databaseService.cliente_empresa.findUnique({
      where: { Id_Cliente: createdCliente.Id_Cliente },
    });
    expect(deletedCliente).toBeNull();
  });
});
