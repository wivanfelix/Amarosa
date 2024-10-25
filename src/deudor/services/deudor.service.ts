import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/services/database.service';
import { CreateDeudorDto } from '../dto/create-deudor.dto';
import { UpdateDeudorDto } from '../dto/update-deudor.dto';

@Injectable()
export class DeudorService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createDeudorDto: CreateDeudorDto) {
    return this.databaseService.deudor.create({
      data: {
        Primer_Nombre: createDeudorDto.primerNombre,
        Segundo_Nombre: createDeudorDto.segundoNombre,
        Primer_Apellido: createDeudorDto.primerApellido,
        Segundo_Apellido: createDeudorDto.segundoApellido,
        Cui: createDeudorDto.cui,
        Telefono: createDeudorDto.telefono,
        Direccion: createDeudorDto.direccion,
        Lugar_Trabajo: createDeudorDto.lugarTrabajo,
        Direccion_Trabajo: createDeudorDto.direccionTrabajo,
        Telefono_Trabajo: createDeudorDto.telefonoTrabajo,
        localizable: 1, // Por defecto, el deudor es localizable
      },
    });
  }

  async findAll() {
    return this.databaseService.deudor.findMany();
  }

  async findOne(id: number) {
    const deudor = await this.databaseService.deudor.findUnique({
      where: { Id_Deudor: id },
    });
    if (!deudor) {
      throw new NotFoundException('Deudor no encontrado');
    }
    return deudor;
  }

  async update(id: number, updateDeudorDto: UpdateDeudorDto) {
    const deudor = await this.databaseService.deudor.findUnique({
      where: { Id_Deudor: id },
    });
    if (!deudor) {
      throw new NotFoundException('Deudor no encontrado');
    }

    return this.databaseService.deudor.update({
      where: { Id_Deudor: id },
      data: {
        Telefono: updateDeudorDto.telefono,
        Direccion: updateDeudorDto.direccion,
        Lugar_Trabajo: updateDeudorDto.lugarTrabajo,
        Direccion_Trabajo: updateDeudorDto.direccionTrabajo,
        Telefono_Trabajo: updateDeudorDto.telefonoTrabajo,
        localizable: updateDeudorDto.localizable, // Manejo de localizable
      },
    });
  }

  async remove(id: number) {
    const deudor = await this.databaseService.deudor.findUnique({
      where: { Id_Deudor: id },
    });
    if (!deudor) {
      throw new NotFoundException('Deudor no encontrado');
    }

    return this.databaseService.deudor.delete({
      where: { Id_Deudor: id },
    });
  }

  // Servicio para declarar un deudor como ilocalizable (localizable = 0)
  async declararIlocalizable(id: number) {
    const deudor = await this.databaseService.deudor.findUnique({
      where: { Id_Deudor: id },
    });
    if (!deudor) {
      throw new NotFoundException('Deudor no encontrado');
    }

    return this.databaseService.deudor.update({
      where: { Id_Deudor: id },
      data: {
        localizable: 0, // Cambiar a ilocalizable
      },
    });
  }
}
