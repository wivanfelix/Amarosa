import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/services/database.service';
import { CreateDeudorDto } from '../dto/create-deudor.dto';
import { UpdateDeudorDto } from '../dto/update-deudor.dto';
@Injectable()
export class DeudorService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createDeudorDto: CreateDeudorDto) {
    return this.databaseService.deudor.create({
      data: createDeudorDto,
    });
  }

  findAll() {
    return this.databaseService.deudor.findMany();
  }

  findOne(id: number) {
    return this.databaseService.deudor.findUnique({
      where: { Id_Deudor: id },
    });
  }

  update(id: number, updateDeudorDto: UpdateDeudorDto) {
    return this.databaseService.deudor.update({
      where: { Id_Deudor: id },
      data: updateDeudorDto,
    });
  }

  remove(id: number) {
    return this.databaseService.deudor.delete({
      where: { Id_Deudor: id },
    });
  }
}
