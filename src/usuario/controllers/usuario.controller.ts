import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UsuarioService } from '../services/usuario.service';
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  createAdmin(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.createAdmin(createUsuarioDto);
  }
}
