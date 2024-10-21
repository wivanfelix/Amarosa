import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/services/database.service';
import { CreateAbonoDto } from '../dto/create-abono.dto';

@Injectable()
export class AbonoService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createAbonoDto: CreateAbonoDto) {
    return this.databaseService.abono.create({
      data: createAbonoDto,
    });
  }

  findAll() {
    return this.databaseService.abono.findMany();
  }

  findOne(id: number) {
    return this.databaseService.abono.findUnique({
      where: { Id_Abono: id },
    });
  }

  remove(id: number) {
    return this.databaseService.abono.delete({
      where: { Id_Abono: id },
    });
  }
}
