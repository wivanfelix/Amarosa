import { Test, TestingModule } from '@nestjs/testing';
import { ClienteEmpresaController } from './cliente_empresa.controller';
import { ClienteEmpresaService } from './cliente_empresa.service';

describe('ClienteEmpresaController', () => {
  let controller: ClienteEmpresaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClienteEmpresaController],
      providers: [ClienteEmpresaService],
    }).compile();

    controller = module.get<ClienteEmpresaController>(ClienteEmpresaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
