import { Module } from '@nestjs/common';
import { ClienteIndividualService } from './services/cliente_individual.service';
import { ClienteIndividualController } from './controllers/cliente_individual.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [ClienteIndividualController],
  providers: [ClienteIndividualService],
  imports: [DatabaseModule],
})
export class ClienteIndividualModule {}
