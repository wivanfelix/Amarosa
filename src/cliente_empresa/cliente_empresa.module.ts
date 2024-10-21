import { Module } from '@nestjs/common';
import { ClienteEmpresaService } from './services/cliente_empresa.service';
import { ClienteEmpresaController } from './controllers/cliente_empresa.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [ClienteEmpresaController],
  providers: [ClienteEmpresaService],
  imports: [DatabaseModule],
})
export class ClienteEmpresaModule {}
