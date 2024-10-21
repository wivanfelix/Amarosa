import { Module } from '@nestjs/common';
import { CarteraService } from './services/cartera.service';
import { CarteraController } from './controllers/cartera.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [CarteraController],
  providers: [CarteraService],
  imports: [DatabaseModule],
})
export class CarteraModule {}
