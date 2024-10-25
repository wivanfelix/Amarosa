import { Test, TestingModule } from '@nestjs/testing';
import { AccionCobroController } from './accion_cobro.controller';
import { AccionCobroService } from '../services/accion_cobro.service';
import { AccionCobroModule } from '../accion_cobro.module';

describe('AccionCobroController', () => {
  let controller: AccionCobroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccionCobroController],
      providers: [AccionCobroService],
      imports: [AccionCobroModule],
    }).compile();

    controller = module.get<AccionCobroController>(AccionCobroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
