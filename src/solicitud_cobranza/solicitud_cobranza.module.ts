import { Module } from '@nestjs/common';
import { SolicitudCobranzaService } from './services/solicitud_cobranza.service';
import { SolicitudCobranzaController } from './controllers/solicitud_cobranza.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [SolicitudCobranzaController],
  providers: [SolicitudCobranzaService],
  imports: [DatabaseModule],
})
export class SolicitudCobranzaModule {}
