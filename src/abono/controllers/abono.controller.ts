import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AbonoService } from '../services/abono.service';
import { CreateAbonoDto } from '../dto/create-abono.dto';

@Controller('abono')
export class AbonoController {
  constructor(private readonly abonoService: AbonoService) {}

  @Post()
  create(@Body() createAbonoDto: CreateAbonoDto) {
    return this.abonoService.create(createAbonoDto);
  }

  @Get()
  findAll() {
    return this.abonoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.abonoService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.abonoService.remove(+id);
  }
}
