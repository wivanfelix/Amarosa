import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCobradorDto } from '../dto/create-cobrador.dto';
import { UpdateCobradorDto } from '../dto/update-cobrador.dto';
import { DatabaseService } from 'src/database/services/database.service';

@Injectable()
export class CobradorService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createCobradorDto: CreateCobradorDto) {
    return this.databaseService.cobrador.create({
      data: {
        Codigo_Cobrador: createCobradorDto.Codigo_Cobrador,
        cartera: { connect: { Id_Cartera: createCobradorDto.idCartera } }, // Relación con cartera
        Primer_Nombre: createCobradorDto.primerNombre,
        Segundo_Nombre: createCobradorDto.segundoNombre,
        Primer_Apellido: createCobradorDto.primerApellido,
        Segundo_Apellido: createCobradorDto.segundoApellido,
        Cui: createCobradorDto.cui,
        Nit: createCobradorDto.nit,
        Telefono: createCobradorDto.telefono,
        Email: createCobradorDto.email,
        Estado: createCobradorDto.estado,
      },
    });
  }

  async findAll() {
    return this.databaseService.cobrador.findMany();
  }

  async findOne(id: number) {
    const cobrador = await this.databaseService.cobrador.findUnique({
      where: { Id_Cobrador: id },
    });
    if (!cobrador) {
      throw new NotFoundException('Cobrador no encontrado');
    }
    return cobrador;
  }

  async findAllByCartera(idCartera: number) {
    return this.databaseService.cobrador.findMany({
      where: { Id_Cartera: idCartera },
    });
  }

  async update(id: number, updateCobradorDto: UpdateCobradorDto) {
    const cobrador = await this.databaseService.cobrador.findUnique({
      where: { Id_Cobrador: id },
    });
    if (!cobrador) {
      throw new NotFoundException('Cobrador no encontrado');
    }

    return this.databaseService.cobrador.update({
      where: { Id_Cobrador: id },
      data: {
        Telefono: updateCobradorDto.telefono,
        Email: updateCobradorDto.email,
      },
    });
  }

  async remove(id: number) {
    const cobrador = await this.databaseService.cobrador.findUnique({
      where: { Id_Cobrador: id },
    });
    if (!cobrador) {
      throw new NotFoundException('Cobrador no encontrado');
    }

    return this.databaseService.cobrador.delete({
      where: { Id_Cobrador: id },
    });
  }
}
