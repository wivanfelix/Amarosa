import { Module } from '@nestjs/common';
import { AbonoService } from './services/abono.service';
import { AbonoController } from './controllers/abono.controller';
import { DatabaseModule } from 'src/database/database.module';
@Module({
  controllers: [AbonoController],
  providers: [AbonoService],
  imports: [DatabaseModule],
})
export class AbonoModule {}
