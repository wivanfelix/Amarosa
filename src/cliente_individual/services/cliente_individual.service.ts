import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/services/database.service';
import { CreateClienteIndividualDto } from '../dto/create-cliente_individual.dto';
import { UpdateClienteIndividualDto } from '../dto/update-cliente_individual.dto';

@Injectable()
export class ClienteIndividualService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createClienteIndividualDto: CreateClienteIndividualDto) {
    return this.databaseService.cliente_individual.create({
      data: {
        Primer_Nombre: createClienteIndividualDto.primerNombre,
        Segundo_Nombre: createClienteIndividualDto.segundoNombre,
        Primer_Apellido: createClienteIndividualDto.primerApellido,
        Segundo_Apellido: createClienteIndividualDto.segundoApellido,
        Cui: createClienteIndividualDto.cui,
        Nit: createClienteIndividualDto.nit,
        Telefono: createClienteIndividualDto.telefono,
        Email: createClienteIndividualDto.email,
        Direccion: createClienteIndividualDto.direccion,
        Estado: 'Activo',
      },
    });
  }

  async findAll() {
    return this.databaseService.cliente_individual.findMany();
  }

  async findOne(id: number) {
    const cliente = await this.databaseService.cliente_individual.findUnique({
      where: { Id_Cliente: id },
    });
    if (!cliente) {
      throw new NotFoundException('Cliente no encontrado');
    }
    return cliente;
  }

  async update(
    id: number,
    updateClienteIndividualDto: UpdateClienteIndividualDto,
  ) {
    const cliente = await this.databaseService.cliente_individual.findUnique({
      where: { Id_Cliente: id },
    });
    if (!cliente) {
      throw new NotFoundException('Cliente no encontrado');
    }

    return this.databaseService.cliente_individual.update({
      where: { Id_Cliente: id },
      data: {
        Telefono: updateClienteIndividualDto.telefono,
        Email: updateClienteIndividualDto.email,
        Direccion: updateClienteIndividualDto.direccion,
      },
    });
  }

  async remove(id: number) {
    const cliente = await this.databaseService.cliente_individual.findUnique({
      where: { Id_Cliente: id },
    });
    if (!cliente) {
      throw new NotFoundException('Cliente no encontrado');
    }

    return this.databaseService.cliente_individual.delete({
      where: { Id_Cliente: id },
    });
  }
}
