import { Module } from '@nestjs/common';
import { DeudorService } from './services/deudor.service';
import { DeudorController } from './controllers/deudor.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [DeudorController],
  providers: [DeudorService],
  imports: [DatabaseModule],
})
export class DeudorModule {}
