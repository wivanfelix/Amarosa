import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreditoService } from '../services/credito.service';
import { CreateCreditoDto } from '../dto/create-credito.dto';

@Controller('credito')
export class CreditoController {
  constructor(private readonly creditoService: CreditoService) {}

  @Post()
  create(@Body() createCreditoDto: CreateCreditoDto) {
    return this.creditoService.create(createCreditoDto);
  }

  @Get()
  findAll() {
    return this.creditoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creditoService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creditoService.remove(+id);
  }
}