import { Test, TestingModule } from '@nestjs/testing';
import { ClienteIndividualService } from './cliente_individual.service';

describe('ClienteIndividualService', () => {
  let service: ClienteIndividualService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClienteIndividualService],
    }).compile();

    service = module.get<ClienteIndividualService>(ClienteIndividualService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
