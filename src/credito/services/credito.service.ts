import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCreditoDto } from '../dto/create-credito.dto';
import { DatabaseService } from 'src/database/services/database.service';

@Injectable()
export class CreditoService {
  constructor(private databaseService: DatabaseService) {}

  async create(createCreditoDto: CreateCreditoDto) {
    return this.databaseService.credito.create({
      data: {
        Id_Solicitud: createCreditoDto.Id_Solicitud,
        Id_Deudor: createCreditoDto.Id_Deudor,
        Id_Cobrador: createCreditoDto.Id_Cobrador,
        Tipo_Credito: createCreditoDto.tipoCredito,
        Tipo_Cliente: createCreditoDto.tipoCliente,
        Id_Cliente_Individual: createCreditoDto.Id_ClienteIndividual,
        Id_Cliente_Empresa: createCreditoDto.Id_ClienteEmpresa,
        Fecha_Inicio_Cobro: createCreditoDto.fechaInicioCobro,
        Fecha_Fin_Cobro: createCreditoDto.fechaFinCobro,
        Monto_Inicial: createCreditoDto.montoInicial,
        Tasa_Mora: createCreditoDto.tasaMora,
        Fecha_Inicial_Mora: createCreditoDto.fechaInicialMora,
        Estado: createCreditoDto.estado || 'recuperable', // Definición predeterminada si no se pasa en el DTO
      },
    });
  }

  async findAll() {
    return this.databaseService.credito.findMany();
  }

  async findOne(id: number) {
    const credito = await this.databaseService.credito.findUnique({
      where: { Id_Credito: id },
    });
    if (!credito) {
      throw new NotFoundException('Crédito no encontrado');
    }
    return credito;
  }

  async remove(id: number) {
    const credito = await this.databaseService.credito.findUnique({
      where: { Id_Credito: id },
    });
    if (!credito) {
      throw new NotFoundException('Crédito no encontrado');
    }
    return this.databaseService.credito.delete({
      where: { Id_Credito: id },
    });
  }

  async declararRiesgoso(id: number) {
    const credito = await this.databaseService.credito.findUnique({
      where: { Id_Credito: id },
    });
    if (!credito) {
      throw new NotFoundException('Crédito no encontrado');
    }
    return this.databaseService.credito.update({
      where: { Id_Credito: id },
      data: {
        Estado: 'riesgoso',
      },
    });
  }

  async declararIrrecuperable(id: number) {
    const credito = await this.databaseService.credito.findUnique({
      where: { Id_Credito: id },
    });
    if (!credito) {
      throw new NotFoundException('Crédito no encontrado');
    }
    return this.databaseService.credito.update({
      where: { Id_Credito: id },
      data: {
        Estado: 'irrecuperable',
      },
    });
  }
}
