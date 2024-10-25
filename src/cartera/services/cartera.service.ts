import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/services/database.service';
import { CreateCarteraDto } from '../dto/create-cartera.dto';
import { UpdateCarteraDto } from '../dto/update-cartera.dto';

@Injectable()
export class CarteraService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createCarteraDto: CreateCarteraDto) {
    return this.databaseService.cartera.create({
      data: {
        Nombre: createCarteraDto.nombre,
        Nombre_Contacto: createCarteraDto.nombreContacto,
        Telefono: createCarteraDto.telefono,
        Email: createCarteraDto.email,
        Direccion: createCarteraDto.direccion,
      },
    });
  }

  findAll() {
    return this.databaseService.cartera.findMany();
  }

  async findOne(id: number) {
    const cartera = await this.databaseService.cartera.findUnique({
      where: { Id_Cartera: id },
    });

    if (!cartera) {
      throw new NotFoundException('Cartera no encontrada');
    }

    return cartera;
  }

  async update(id: number, updateCarteraDto: UpdateCarteraDto) {
    const cartera = await this.databaseService.cartera.findUnique({
      where: { Id_Cartera: id },
    });
    if (!cartera) {
      throw new NotFoundException('Cartera no encontrada');
    }

    return this.databaseService.cartera.update({
      where: { Id_Cartera: id },
      data: {
        Nombre_Contacto: updateCarteraDto.nombreContacto,
        Telefono: updateCarteraDto.telefono,
        Email: updateCarteraDto.email,
        Direccion: updateCarteraDto.direccion,
      },
    });
  }

  remove(id: number) {
    const cartera = this.databaseService.cartera.findUnique({
      where: { Id_Cartera: id },
    });
    if (!cartera) {
      throw new NotFoundException('Cartera no encontrada');
    }

    return this.databaseService.cartera.delete({
      where: { Id_Cartera: id },
    });
  }
}
