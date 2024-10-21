import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ClienteIndividualService } from '../services/cliente_individual.service';
import { CreateClienteIndividualDto } from '../dto/create-cliente_individual.dto';

@Controller('cliente-individual')
export class ClienteIndividualController {
  constructor(
    private readonly clienteIndividualService: ClienteIndividualService,
  ) {}

  @Post()
  create(@Body() createClienteIndividualDto: CreateClienteIndividualDto) {
    return this.clienteIndividualService.create(createClienteIndividualDto);
  }

  @Get()
  findAll() {
    return this.clienteIndividualService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clienteIndividualService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clienteIndividualService.remove(+id);
  }
}
