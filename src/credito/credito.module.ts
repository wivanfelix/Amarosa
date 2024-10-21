import { Module } from '@nestjs/common';
import { CreditoService } from './services/credito.service';
import { CreditoController } from './controllers/credito.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [CreditoController],
  providers: [CreditoService],
  imports: [DatabaseModule],
})
export class CreditoModule {}
