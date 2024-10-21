import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/services/database.service';
import { CreateAccionCobroDto } from '../dto/create-accion_cobro.dto';

@Injectable()
export class AccionCobroService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createAccionCobroDto: CreateAccionCobroDto) {
    return this.databaseService.accion_cobro.create({
      data: createAccionCobroDto,
    });
  }

  findAll() {
    return this.databaseService.accion_cobro.findMany();
  }

  findOne(id: number) {
    return this.databaseService.accion_cobro.findUnique({
      where: { Id_Accion: id },
    });
  }

  remove(id: number) {
    return this.databaseService.accion_cobro.delete({
      where: { Id_Accion: id },
    });
  }
}
