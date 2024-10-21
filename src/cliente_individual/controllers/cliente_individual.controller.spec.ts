import { Test, TestingModule } from '@nestjs/testing';
import { ClienteIndividualController } from './cliente_individual.controller';
import { ClienteIndividualService } from './cliente_individual.service';

describe('ClienteIndividualController', () => {
  let controller: ClienteIndividualController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClienteIndividualController],
      providers: [ClienteIndividualService],
    }).compile();

    controller = module.get<ClienteIndividualController>(ClienteIndividualController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
