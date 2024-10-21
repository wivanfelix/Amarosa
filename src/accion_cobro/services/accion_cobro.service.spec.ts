import { Test, TestingModule } from '@nestjs/testing';
import { AccionCobroService } from './accion_cobro.service';

describe('AccionCobroService', () => {
  let service: AccionCobroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccionCobroService],
    }).compile();

    service = module.get<AccionCobroService>(AccionCobroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
