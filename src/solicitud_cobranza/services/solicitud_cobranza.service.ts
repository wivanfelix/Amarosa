import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/services/database.service';
import { CreateSolicitudCobranzaDto } from '../dto/create-solicitud_cobranza.dto';

@Injectable()
export class SolicitudCobranzaService {
  constructor(private databaseService: DatabaseService) {}

  async create(createSolicitudCobranzaDto: CreateSolicitudCobranzaDto) {
    return await this.databaseService.solicitud_cobranza.create({
      data: {
        Tipo_Credito: createSolicitudCobranzaDto.tipoCredito,
        Nombres_Cliente: createSolicitudCobranzaDto.nombresCliente,
        Apellidos_Cliente: createSolicitudCobranzaDto.apellidosCliente,
        Empresa_Cliente: createSolicitudCobranzaDto.empresaCliente,
        Email_Cliente: createSolicitudCobranzaDto.emailCliente,
        Telefono_Cliente: createSolicitudCobranzaDto.telefonoCliente,
        Monto_Credito: createSolicitudCobranzaDto.montoCredito,
        Dias_En_Mora: createSolicitudCobranzaDto.diasEnMora,
        Primer_Nombre_Deudor: createSolicitudCobranzaDto.primerNombreDeudor,
        Segundo_Nombre_Deudor: createSolicitudCobranzaDto.segundoNombreDeudor,
        Primer_Apellido_Deudor: createSolicitudCobranzaDto.primerApellidoDeudor,
        Segundo_Apellido_Deudor:
          createSolicitudCobranzaDto.segundoApellidoDeudor,
        Cui_Deudor: createSolicitudCobranzaDto.cuiDeudor,
        Estado: 'Pendiente',
      },
    });
  }

  async findAll() {
    return this.databaseService.solicitud_cobranza.findMany();
  }

  async findOne(id: number) {
    const solicitud = await this.databaseService.solicitud_cobranza.findUnique({
      where: { Id_Solicitud: id },
    });
    if (!solicitud) {
      throw new NotFoundException('Solicitud no encontrada');
    }
    return solicitud;
  }

  async aprobarSolicitud(id: number) {
    const solicitud = await this.databaseService.solicitud_cobranza.findUnique({
      where: { Id_Solicitud: id },
    });
    if (!solicitud) {
      throw new NotFoundException('Solicitud no encontrada');
    }
    return this.databaseService.solicitud_cobranza.update({
      where: { Id_Solicitud: id },
      data: { Estado: 'Aprobada' },
    });
  }

  async rechazarSolicitud(id: number) {
    const solicitud = await this.databaseService.solicitud_cobranza.findUnique({
      where: { Id_Solicitud: id },
    });
    if (!solicitud) {
      throw new NotFoundException('Solicitud no encontrada');
    }
    return this.databaseService.solicitud_cobranza.update({
      where: { Id_Solicitud: id },
      data: { Estado: 'Rechazada' },
    });
  }

  async remove(id: number) {
    const solicitud = await this.databaseService.solicitud_cobranza.findUnique({
      where: { Id_Solicitud: id },
    });
    if (!solicitud) {
      throw new NotFoundException('Solicitud no encontrada');
    }
    return this.databaseService.solicitud_cobranza.delete({
      where: { Id_Solicitud: id },
    });
  }
}
