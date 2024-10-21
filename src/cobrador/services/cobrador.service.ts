import { Injectable } from '@nestjs/common';
import { CreateCobradorDto } from '../dto/create-cobrador.dto';
import { UpdateCobradorDto } from '../dto/update-cobrador.dto';
import { DatabaseService } from 'src/database/services/database.service';
@Injectable()
export class CobradorService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createCobradorDto: CreateCobradorDto) {
    return this.databaseService.cobrador.create({
      data: createCobradorDto,
    });
  }

  findAll() {
    return this.databaseService.cobrador.findMany();
  }

  findOne(id: number) {
    return this.databaseService.cobrador.findUnique({
      where: { Id_Cobrador: id },
    });
  }

  findAllByCartera(idCartera: number) {
    return this.databaseService.cobrador.findMany({
      where: { Id_Cartera: idCartera },
    });
  }

  // update(id: number, updateCobradorDto: UpdateCobradorDto) {
  //   return this.databaseService.cobrador.update({
  //     where: { Id_Cobrador: id },
  //     data: updateCobradorDto,
  //   });
  // }

  remove(id: number) {
    return this.databaseService.cobrador.delete({
      where: { Id_Cobrador: id },
    });
  }
}
