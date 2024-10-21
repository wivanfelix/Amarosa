import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DeudorService } from '../services/deudor.service';
import { CreateDeudorDto } from '../dto/create-deudor.dto';
import { UpdateDeudorDto } from '../dto/update-deudor.dto';

@Controller('deudor')
export class DeudorController {
  constructor(private readonly deudorService: DeudorService) {}

  @Post()
  create(@Body() createDeudorDto: CreateDeudorDto) {
    return this.deudorService.create(createDeudorDto);
  }

  @Get()
  findAll() {
    return this.deudorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deudorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeudorDto: UpdateDeudorDto) {
    return this.deudorService.update(+id, updateDeudorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deudorService.remove(+id);
  }
}
