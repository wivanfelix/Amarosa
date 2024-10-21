import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudCobranzaService } from './solicitud_cobranza.service';

describe('SolicitudCobranzaService', () => {
  let service: SolicitudCobranzaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolicitudCobranzaService],
    }).compile();

    service = module.get<SolicitudCobranzaService>(SolicitudCobranzaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
