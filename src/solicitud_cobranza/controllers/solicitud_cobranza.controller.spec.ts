import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudCobranzaController } from './solicitud_cobranza.controller';
import { SolicitudCobranzaService } from '../services/solicitud_cobranza.service';

describe('SolicitudCobranzaController', () => {
  let controller: SolicitudCobranzaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitudCobranzaController],
      providers: [SolicitudCobranzaService],
    }).compile();

    controller = module.get<SolicitudCobranzaController>(
      SolicitudCobranzaController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
