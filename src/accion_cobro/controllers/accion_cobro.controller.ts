import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AccionCobroService } from '../services/accion_cobro.service';
import { CreateAccionCobroDto } from '../dto/create-accion_cobro.dto';
@Controller('accion-cobro')
export class AccionCobroController {
  constructor(private readonly accionCobroService: AccionCobroService) {}

  @Post()
  create(@Body() createAccionCobroDto: CreateAccionCobroDto) {
    return this.accionCobroService.create(createAccionCobroDto);
  }

  @Get()
  findAll() {
    return this.accionCobroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accionCobroService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accionCobroService.remove(+id);
  }
}
