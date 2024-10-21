import { Module } from '@nestjs/common';
import { UsuarioController } from './controllers/usuario.controller';
import { UsuarioService } from './services/usuario.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
  imports: [DatabaseModule],
  exports: [UsuarioService],
})
export class UsuarioModule {}
