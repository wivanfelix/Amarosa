import { Test, TestingModule } from '@nestjs/testing';
import { AbonoService } from './abono.service';
import { DatabaseService } from 'src/database/services/database.service'; // Asegúrate de que la ruta es correcta

describe('AbonoService', () => {
  let service: AbonoService;
  let databaseService: DatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AbonoService,
        {
          provide: DatabaseService, // Mock del DatabaseService
          useValue: {
            abono: {
              create: jest.fn(),
              findMany: jest.fn(),
              findUnique: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<AbonoService>(AbonoService);
    databaseService = module.get<DatabaseService>(DatabaseService); // Obtenemos el mock del servicio
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Puedes agregar más tests unitarios aquí, utilizando el mock de databaseService
});
