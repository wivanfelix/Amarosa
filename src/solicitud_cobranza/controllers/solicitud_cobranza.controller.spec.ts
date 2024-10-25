import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudCobranzaController } from './solicitud_cobranza.controller';
import { SolicitudCobranzaService } from '../services/solicitud_cobranza.service';
import { DatabaseService } from 'src/database/services/database.service';
import { ConfigModule } from '@nestjs/config';

describe('SolicitudCobranzaController', () => {
  let controller: SolicitudCobranzaController;
  let service: SolicitudCobranzaService;
  let databaseService: DatabaseService;
  let cleanDatabase: () => Promise<void>;

  beforeAll(async () => {
    databaseService = new DatabaseService();
    await databaseService.$connect();

    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      controllers: [SolicitudCobranzaController],
      providers: [SolicitudCobranzaService, DatabaseService],
    }).compile();

    controller = module.get<SolicitudCobranzaController>(
      SolicitudCobranzaController,
    );
    service = module.get<SolicitudCobranzaService>(SolicitudCobranzaService);

    cleanDatabase = async () => {
      await databaseService.abono.deleteMany();
      await databaseService.accion_cobro.deleteMany();
      await databaseService.credito.deleteMany();
      await databaseService.deudor.deleteMany();
      await databaseService.solicitud_cobranza.deleteMany();
    };
  });

  beforeEach(async () => {
    await cleanDatabase();
  });

  afterAll(async () => {
    await cleanDatabase();
    await databaseService.$disconnect();
  });

  it('should create a solicitud', async () => {
    const dto = {
      tipoCredito: 'Personal',
      nombresCliente: 'Juan',
      apellidosCliente: 'Perez',
      empresaCliente: 'Empresa X',
      emailCliente: 'juan@empresa.com',
      telefonoCliente: '12345678',
      montoCredito: '10000',
      diasEnMora: '30',
      primerNombreDeudor: 'DeudorNombre',
      segundoNombreDeudor: 'DeudorSegundoNombre',
      primerApellidoDeudor: 'DeudorApellido',
      segundoApellidoDeudor: 'DeudorSegundoApellido',
      cuiDeudor: '1234567890123',
      estado: 'Pendiente',
    };

    const result = await controller.create(dto);
    expect(result).toHaveProperty('Id_Solicitud');
    expect(result.Nombres_Cliente).toBe(dto.nombresCliente);
    expect(result.Tipo_Credito).toBe(dto.tipoCredito);
    expect(result.Estado).toBe('Pendiente');
  });

  it('should find all solicitudes', async () => {
    await databaseService.solicitud_cobranza.create({
      data: {
        Tipo_Credito: 'Personal',
        Nombres_Cliente: 'Juan',
        Apellidos_Cliente: 'Perez',
        Empresa_Cliente: 'Empresa X',
        Email_Cliente: 'juan@empresa.com',
        Telefono_Cliente: '12345678',
        Monto_Credito: '10000',
        Dias_En_Mora: '30',
        Primer_Nombre_Deudor: 'DeudorNombre',
        Segundo_Nombre_Deudor: 'DeudorSegundoNombre',
        Primer_Apellido_Deudor: 'DeudorApellido',
        Segundo_Apellido_Deudor: 'DeudorSegundoApellido',
        Cui_Deudor: '1234567890123',
        Estado: 'Pendiente',
      },
    });

    const result = await controller.findAll();
    expect(result.length).toBeGreaterThan(0);
  });

  it('should approve a solicitud', async () => {
    const createdSolicitud = await databaseService.solicitud_cobranza.create({
      data: {
        Tipo_Credito: 'Personal',
        Estado: 'Pendiente',
        Nombres_Cliente: 'Juan',
        Apellidos_Cliente: 'Perez',
        Empresa_Cliente: 'Empresa X',
        Email_Cliente: 'juan@empresa.com',
        Telefono_Cliente: '12345678',
        Monto_Credito: '10000',
        Dias_En_Mora: '30',
        Primer_Nombre_Deudor: 'DeudorNombre',
        Segundo_Nombre_Deudor: 'DeudorSegundoNombre',
        Primer_Apellido_Deudor: 'DeudorApellido',
        Segundo_Apellido_Deudor: 'DeudorSegundoApellido',
        Cui_Deudor: '1234567890123',
      },
    });

    const result = await controller.aprobarSolicitud(
      createdSolicitud.Id_Solicitud.toString(),
    );
    expect(result.Estado).toBe('Aprobada');
  });

  it('should reject a solicitud', async () => {
    const createdSolicitud = await databaseService.solicitud_cobranza.create({
      data: {
        Tipo_Credito: 'Personal',
        Estado: 'Pendiente',
        Nombres_Cliente: 'Juan',
        Apellidos_Cliente: 'Perez',
        Empresa_Cliente: 'Empresa X',
        Email_Cliente: 'juan@empresa.com',
        Telefono_Cliente: '12345678',
        Monto_Credito: '10000',
        Dias_En_Mora: '30',
        Primer_Nombre_Deudor: 'DeudorNombre',
        Segundo_Nombre_Deudor: 'DeudorSegundoNombre',
        Primer_Apellido_Deudor: 'DeudorApellido',
        Segundo_Apellido_Deudor: 'DeudorSegundoApellido',
        Cui_Deudor: '1234567890123',
      },
    });

    const result = await controller.rechazarSolicitud(
      createdSolicitud.Id_Solicitud.toString(),
    );
    expect(result.Estado).toBe('Rechazada');
  });
});
