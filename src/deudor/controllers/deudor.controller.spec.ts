import { Test, TestingModule } from '@nestjs/testing';
import { DeudorController } from './deudor.controller';
import { DeudorService } from './deudor.service';

describe('DeudorController', () => {
  let controller: DeudorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeudorController],
      providers: [DeudorService],
    }).compile();

    controller = module.get<DeudorController>(DeudorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
