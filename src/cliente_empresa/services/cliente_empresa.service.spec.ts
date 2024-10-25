import { Test, TestingModule } from '@nestjs/testing';
import { ClienteEmpresaService } from './cliente_empresa.service';
import { DatabaseService } from 'src/database/services/database.service';
import { ConfigModule } from '@nestjs/config';
import { NotFoundException } from '@nestjs/common';

describe('ClienteEmpresaService', () => {
  let service: ClienteEmpresaService;
  let databaseService: DatabaseService;
  let cleanDatabase: () => Promise<void>;

  beforeAll(async () => {
    // Inicializar DatabaseService
    databaseService = new DatabaseService();
    await databaseService.$connect();

    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      providers: [ClienteEmpresaService, DatabaseService],
    }).compile();

    service = module.get<ClienteEmpresaService>(ClienteEmpresaService);

    // Definir función para limpiar la base de datos
    cleanDatabase = async () => {
      await databaseService.cliente_empresa.deleteMany();
    };
  });

  beforeEach(async () => {
    // Limpiar la base de datos antes de cada prueba
    await cleanDatabase();
  });

  afterAll(async () => {
    // Desconectar la base de datos después de las pruebas
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

    const result = await service.create(dto);

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

    const result = await service.findAll();
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

    const result = await service.findOne(createdCliente.Id_Cliente);
    expect(result).toBeDefined();
    expect(result.Id_Cliente).toBe(createdCliente.Id_Cliente);
  });

  it('should throw NotFoundException if cliente not found', async () => {
    await expect(service.findOne(9999)).rejects.toThrow(NotFoundException);
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

    const result = await service.update(createdCliente.Id_Cliente, updatedDto);

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

    const result = await service.remove(createdCliente.Id_Cliente);
    expect(result).toBeDefined();

    const deletedCliente = await databaseService.cliente_empresa.findUnique({
      where: { Id_Cliente: createdCliente.Id_Cliente },
    });
    expect(deletedCliente).toBeNull();
  });
});
