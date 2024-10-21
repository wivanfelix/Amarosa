import { Module } from '@nestjs/common';
import { AccionCobroService } from './services/accion_cobro.service';
import { AccionCobroController } from './controllers/accion_cobro.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [AccionCobroController],
  providers: [AccionCobroService],
  imports: [DatabaseModule],
})
export class AccionCobroModule {}
