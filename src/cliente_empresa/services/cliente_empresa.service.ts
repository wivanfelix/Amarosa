import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/services/database.service';
import { CreateClienteEmpresaDto } from '../dto/create-cliente_empresa.dto';
import { UpdateClienteEmpresaDto } from '../dto/update-cliente_empresa.dto';

@Injectable()
export class ClienteEmpresaService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createClienteEmpresaDto: CreateClienteEmpresaDto) {
    return this.databaseService.cliente_empresa.create({
      data: {
        Razon_Social: createClienteEmpresaDto.razonSocial,
        Nombre_Comercial: createClienteEmpresaDto.nombreComercial,
        Nit: createClienteEmpresaDto.nit,
        Nombre_Contacto: createClienteEmpresaDto.nombreContacto,
        Telefono: createClienteEmpresaDto.telefono,
        Email: createClienteEmpresaDto.email,
        Direccion: createClienteEmpresaDto.direccion,
        Estado: createClienteEmpresaDto.estado,
      },
    });
  }

  async findAll() {
    return this.databaseService.cliente_empresa.findMany();
  }

  async findOne(id: number) {
    const cliente = await this.databaseService.cliente_empresa.findUnique({
      where: { Id_Cliente: id },
    });
    if (!cliente) {
      throw new NotFoundException('Cliente no encontrado');
    }
    return cliente;
  }

  async update(id: number, updateClienteEmpresaDto: UpdateClienteEmpresaDto) {
    const cliente = await this.databaseService.cliente_empresa.findUnique({
      where: { Id_Cliente: id },
    });
    if (!cliente) {
      throw new NotFoundException('Cliente no encontrado');
    }

    return this.databaseService.cliente_empresa.update({
      where: { Id_Cliente: id },
      data: {
        Nombre_Contacto: updateClienteEmpresaDto.nombreContacto,
        Telefono: updateClienteEmpresaDto.telefono,
        Email: updateClienteEmpresaDto.email,
        Direccion: updateClienteEmpresaDto.direccion,
      },
    });
  }

  async remove(id: number) {
    const cliente = await this.databaseService.cliente_empresa.findUnique({
      where: { Id_Cliente: id },
    });
    if (!cliente) {
      throw new NotFoundException('Cliente no encontrado');
    }

    return this.databaseService.cliente_empresa.delete({
      where: { Id_Cliente: id },
    });
  }
}
