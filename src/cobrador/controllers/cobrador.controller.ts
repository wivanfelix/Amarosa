import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { CobradorService } from '../services/cobrador.service';
import { CreateCobradorDto } from '../dto/create-cobrador.dto';
import { UpdateCobradorDto } from '../dto/update-cobrador.dto';

@Controller('cobrador')
export class CobradorController {
  constructor(private readonly cobradorService: CobradorService) {}

  @Post()
  create(@Body() createCobradorDto: CreateCobradorDto) {
    return this.cobradorService.create(createCobradorDto);
  }

  @Get()
  findAll() {
    return this.cobradorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const cobrador = await this.cobradorService.findOne(+id);
    if (!cobrador) {
      throw new NotFoundException('Cobrador no encontrado');
    }
    return cobrador;
  }

  @Get('cartera/:idCartera')
  findAllByCartera(@Param('idCartera') idCartera: string) {
    return this.cobradorService.findAllByCartera(+idCartera);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCobradorDto: UpdateCobradorDto,
  ) {
    return this.cobradorService.update(+id, updateCobradorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cobradorService.remove(+id);
  }
}
