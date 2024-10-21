import { Injectable } from '@nestjs/common';
import { CreateCreditoDto } from '../dto/create-credito.dto';
import { DatabaseService } from 'src/database/services/database.service';

@Injectable()
export class CreditoService {
  constructor(private databaseService: DatabaseService) {}
  create(createCreditoDto: CreateCreditoDto) {
    return this.databaseService.credito.create({
      data: createCreditoDto,
    });
  }

  findAll() {
    return this.databaseService.credito.findMany();
  }

  findOne(id: number) {
    return this.databaseService.credito.findUnique({
      where: { Id_Credito: id },
    });
  }

  remove(id: number) {
    return this.databaseService.credito.delete({
      where: { Id_Credito: id },
    });
  }
}
