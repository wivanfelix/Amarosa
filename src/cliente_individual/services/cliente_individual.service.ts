import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/services/database.service';
import { CreateClienteIndividualDto } from '../dto/create-cliente_individual.dto';

@Injectable()
export class ClienteIndividualService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createClienteIndividualDto: CreateClienteIndividualDto) {
    return this.databaseService.cliente_individual.create({
      data: createClienteIndividualDto,
    });
  }

  findAll() {
    return this.databaseService.cliente_individual.findMany();
  }

  findOne(id: number) {
    return this.databaseService.cliente_individual.findUnique({
      where: { Id_Cliente: id },
    });
  }

  remove(id: number) {
    return this.databaseService.cliente_individual.delete({
      where: { Id_Cliente: id },
    });
  }
}
