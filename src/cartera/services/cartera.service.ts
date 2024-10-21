import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/services/database.service';
import { CreateCarteraDto } from '../dto/create-cartera.dto';
@Injectable()
export class CarteraService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createCarteraDto: CreateCarteraDto) {
    return this.databaseService.cartera.create({
      data: createCarteraDto,
    });
  }

  findAll() {
    return this.databaseService.cartera.findMany();
  }

  findOne(id: number) {
    return this.databaseService.cartera.findUnique({
      where: { Id_Cartera: id },
    });
  }

  remove(id: number) {
    return this.databaseService.cartera.delete({
      where: { Id_Cartera: id },
    });
  }
}
