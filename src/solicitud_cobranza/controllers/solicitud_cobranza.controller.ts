import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SolicitudCobranzaService } from '../services/solicitud_cobranza.service';
import { CreateSolicitudCobranzaDto } from '../dto/create-solicitud_cobranza.dto';
@Controller('solicitud-cobranza')
export class SolicitudCobranzaController {
  constructor(
    private readonly solicitudCobranzaService: SolicitudCobranzaService,
  ) {}

  @Post()
  create(@Body() createSolicitudCobranzaDto: CreateSolicitudCobranzaDto) {
    return this.solicitudCobranzaService.create(createSolicitudCobranzaDto);
  }

  @Get()
  findAll() {
    return this.solicitudCobranzaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitudCobranzaService.findOne(+id);
  }

  @Patch(':id')
  aprobarSolicitud(@Param('id') id: string) {
    return this.solicitudCobranzaService.aprobarSolicitud(+id);
  }

  @Patch(':id')
  rechazarSolicitud(@Param('id') id: string) {
    return this.solicitudCobranzaService.rechazarSolicitud(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitudCobranzaService.remove(+id);
  }
}
