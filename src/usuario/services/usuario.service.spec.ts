import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioService } from './usuario.service';
import { DatabaseModule } from 'src/database/database.module';

describe('UsuarioService', () => {
  let service: UsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuarioService],
      imports: [DatabaseModule],
    }).compile();

    service = module.get<UsuarioService>(UsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
