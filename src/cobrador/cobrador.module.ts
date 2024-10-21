import { Module } from '@nestjs/common';
import { CobradorService } from './services/cobrador.service';
import { CobradorController } from './controllers/cobrador.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [CobradorController],
  providers: [CobradorService],
  imports: [DatabaseModule],
})
export class CobradorModule {}
