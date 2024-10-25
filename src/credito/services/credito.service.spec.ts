import { Test, TestingModule } from '@nestjs/testing';
import { CreditoService } from './credito.service';
import { DatabaseService } from 'src/database/services/database.service';
import { ConfigModule } from '@nestjs/config';
import { NotFoundException } from '@nestjs/common';
import { CreateCreditoDto } from '../dto/create-credito.dto';

describe('CreditoService', () => {
  let service: CreditoService;
  let databaseService: DatabaseService;
  let cleanDatabase: () => Promise<void>;

  beforeAll(async () => {
    databaseService = new DatabaseService();
    await databaseService.$connect();

    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      providers: [CreditoService, DatabaseService],
    }).compile();

    service = module.get<CreditoService>(CreditoService);

    cleanDatabase = async () => {
      await databaseService.credito.deleteMany();
      await databaseService.solicitud_cobranza.deleteMany();
      await databaseService.deudor.deleteMany();
      await databaseService.cobrador.deleteMany();
      await databaseService.cliente_individual.deleteMany();
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

  it('should create a credito', async () => {
    const solicitud = await databaseService.solicitud_cobranza.create({
      data: {},
    });
    const deudor = await databaseService.deudor.create({
      data: {
        Primer_Nombre: 'Carlos',
        Primer_Apellido: 'Lopez',
        Cui: '1234567890123',
      },
    });
    const cobrador = await databaseService.cobrador.create({
      data: {
        Primer_Nombre: 'Ana',
        Primer_Apellido: 'Perez',
        Cui: '9876543210987',
      },
    });
    const clienteIndividual = await databaseService.cliente_individual.create({
      data: { Nit: '12345678', Email: 'test@test.com' }, // Cambiado 'NIT' a 'Nit'
    });

    const dto: CreateCreditoDto = {
      Id_Solicitud: solicitud.Id_Solicitud,
      Id_Deudor: deudor.Id_Deudor,
      Id_Cobrador: cobrador.Id_Cobrador,
      tipoCredito: 'Hipotecario',
      tipoCliente: 'Individual',
      Id_ClienteIndividual: clienteIndividual.Id_Cliente,
      fechaInicioCobro: new Date(),
      montoInicial: 10000,
      tasaMora: 5.0,
      estado: 'recuperable', // Añadido 'estado' al DTO
    };

    const result = await service.create(dto);
    expect(result).toHaveProperty('Id_Credito');
    expect(result.Tipo_Credito).toBe(dto.tipoCredito);
  });

  it('should find all creditos', async () => {
    await databaseService.credito.create({
      data: {
        Tipo_Credito: 'Personal',
        Tipo_Cliente: 'Individual',
        Monto_Inicial: 5000,
        Tasa_Mora: 2.5,
      },
    });

    const result = await service.findAll();
    expect(result.length).toBeGreaterThan(0);
  });

  it('should find one credito by id', async () => {
    const credito = await databaseService.credito.create({
      data: {
        Tipo_Credito: 'Automotriz',
        Tipo_Cliente: 'Empresa',
        Monto_Inicial: 15000,
        Tasa_Mora: 3.0,
      },
    });

    const result = await service.findOne(credito.Id_Credito);
    expect(result).toBeDefined();
    expect(result.Id_Credito).toBe(credito.Id_Credito);
  });

  it('should throw NotFoundException if credito not found', async () => {
    await expect(service.findOne(9999)).rejects.toThrow(NotFoundException);
  });

  it('should update credito estado to riesgoso', async () => {
    const credito = await databaseService.credito.create({
      data: {
        Tipo_Credito: 'Educativo',
        Tipo_Cliente: 'Individual',
        Monto_Inicial: 2000,
        Tasa_Mora: 1.0,
      },
    });

    const result = await service.declararRiesgoso(credito.Id_Credito);
    expect(result.Estado).toBe('riesgoso');
  });

  it('should update credito estado to irrecuperable', async () => {
    const credito = await databaseService.credito.create({
      data: {
        Tipo_Credito: 'Empresarial',
        Tipo_Cliente: 'Empresa',
        Monto_Inicial: 30000,
        Tasa_Mora: 4.5,
      },
    });

    const result = await service.declararIrrecuperable(credito.Id_Credito);
    expect(result.Estado).toBe('irrecuperable');
  });

  it('should delete a credito', async () => {
    const credito = await databaseService.credito.create({
      data: {
        Tipo_Credito: 'Consumo',
        Tipo_Cliente: 'Individual',
        Monto_Inicial: 1000,
        Tasa_Mora: 2.0,
      },
    });

    const result = await service.remove(credito.Id_Credito);
    expect(result).toBeDefined();

    const deletedCredito = await databaseService.credito.findUnique({
      where: { Id_Credito: credito.Id_Credito },
    });
    expect(deletedCredito).toBeNull();
  });
});
