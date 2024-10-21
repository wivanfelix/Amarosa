import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/services/database.service';
import { CreateClienteEmpresaDto } from '../dto/create-cliente_empresa.dto';
@Injectable()
export class ClienteEmpresaService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createClienteEmpresaDto: CreateClienteEmpresaDto) {
    return this.databaseService.cliente_empresa.create({
      data: createClienteEmpresaDto,
    });
  }

  findAll() {
    return this.databaseService.cliente_empresa.findMany();
  }

  findOne(id: number) {
    return this.databaseService.cliente_empresa.findUnique({
      where: { Id_Cliente: id },
    });
  }

  remove(id: number) {
    return this.databaseService.cliente_empresa.delete({
      where: { Id_Cliente: id },
    });
  }
}
