import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ClienteEmpresaService } from '../services/cliente_empresa.service';
import { CreateClienteEmpresaDto } from '../dto/create-cliente_empresa.dto';

@Controller('cliente-empresa')
export class ClienteEmpresaController {
  constructor(private readonly clienteEmpresaService: ClienteEmpresaService) {}

  @Post()
  create(@Body() createClienteEmpresaDto: CreateClienteEmpresaDto) {
    return this.clienteEmpresaService.create(createClienteEmpresaDto);
  }

  @Get()
  findAll() {
    return this.clienteEmpresaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clienteEmpresaService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clienteEmpresaService.remove(+id);
  }
}
