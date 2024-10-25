import { Test, TestingModule } from '@nestjs/testing';
import { CarteraService } from './cartera.service';
import { DatabaseService } from 'src/database/services/database.service';
import { ConfigModule } from '@nestjs/config';
import { NotFoundException } from '@nestjs/common';

describe('CarteraService', () => {
  let service: CarteraService;
  let databaseService: DatabaseService;

  const cleanDatabase = async () => {
    await databaseService.accion_cobro.deleteMany();
    await databaseService.abono.deleteMany();
    await databaseService.credito.deleteMany();
    await databaseService.cartera.deleteMany();
  };

  beforeAll(async () => {
    databaseService = new DatabaseService();
    await databaseService.$connect();

    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      providers: [CarteraService, DatabaseService],
    }).compile();

    service = module.get<CarteraService>(CarteraService);
  });

  afterEach(async () => {
    await cleanDatabase();
  });

  afterAll(async () => {
    await databaseService.$disconnect();
  });

  it('should create a cartera', async () => {
    const dto = {
      nombre: 'Cartera 1',
      nombreContacto: 'Juan Perez',
      telefono: '12345678',
      email: 'juan@correo.com',
      direccion: 'Calle 123',
    };

    const result = await service.create(dto);
    expect(result).toHaveProperty('Id_Cartera');
    expect(result.Nombre).toBe(dto.nombre);
    expect(result.Nombre_Contacto).toBe(dto.nombreContacto);
  });

  it('should find all carteras', async () => {
    await databaseService.cartera.create({
      data: {
        Nombre: 'Cartera 1',
        Nombre_Contacto: 'Juan Perez',
        Telefono: '12345678',
        Email: 'juan@correo.com',
        Direccion: 'Calle 123',
      },
    });

    const result = await service.findAll();
    expect(result.length).toBeGreaterThan(0);
  });

  it('should find one cartera by id', async () => {
    const createdCartera = await databaseService.cartera.create({
      data: {
        Nombre: 'Cartera 1',
        Nombre_Contacto: 'Juan Perez',
        Telefono: '12345678',
        Email: 'juan@correo.com',
        Direccion: 'Calle 123',
      },
    });

    const result = await service.findOne(createdCartera.Id_Cartera);
    expect(result).toBeDefined();
    expect(result.Id_Cartera).toBe(createdCartera.Id_Cartera);
  });

  it('should throw NotFoundException if cartera not found', async () => {
    await expect(service.findOne(9999)).rejects.toThrow(NotFoundException);
  });

  it('should update a cartera', async () => {
    const createdCartera = await databaseService.cartera.create({
      data: {
        Nombre: 'Cartera 1',
        Nombre_Contacto: 'Juan Perez',
        Telefono: '12345678',
        Email: 'juan@correo.com',
        Direccion: 'Calle 123',
      },
    });

    const updateDto = {
      nombreContacto: 'Carlos López',
      telefono: '87654321',
      email: 'carlos@correo.com',
      direccion: 'Calle 456',
    };

    const result = await service.update(createdCartera.Id_Cartera, updateDto);
    expect(result.Nombre_Contacto).toBe(updateDto.nombreContacto);
    expect(result.Telefono).toBe(updateDto.telefono);
    expect(result.Email).toBe(updateDto.email);
    expect(result.Direccion).toBe(updateDto.direccion);
  });

  it('should delete a cartera', async () => {
    const createdCartera = await databaseService.cartera.create({
      data: {
        Nombre: 'Cartera 1',
        Nombre_Contacto: 'Juan Perez',
        Telefono: '12345678',
        Email: 'juan@correo.com',
        Direccion: 'Calle 123',
      },
    });

    const result = await service.remove(createdCartera.Id_Cartera);
    expect(result).toBeDefined();

    const deletedCartera = await databaseService.cartera.findUnique({
      where: { Id_Cartera: createdCartera.Id_Cartera },
    });
    expect(deletedCartera).toBeNull();
  });
});
