import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CarteraService } from '../services/cartera.service';
import { CreateCarteraDto } from '../dto/create-cartera.dto';
@Controller('cartera')
export class CarteraController {
  constructor(private readonly carteraService: CarteraService) {}

  @Post()
  create(@Body() createCarteraDto: CreateCarteraDto) {
    return this.carteraService.create(createCarteraDto);
  }

  @Get()
  findAll() {
    return this.carteraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carteraService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carteraService.remove(+id);
  }
}
