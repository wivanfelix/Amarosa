import { Test, TestingModule } from '@nestjs/testing';
import { AbonoController } from './abono.controller';
import { AbonoService } from '../services/abono.service';
import { AbonoModule } from '../abono.module';

describe('AbonoController', () => {
  let controller: AbonoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbonoController],
      providers: [AbonoService],
      imports: [AbonoModule],
    }).compile();

    controller = module.get<AbonoController>(AbonoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
