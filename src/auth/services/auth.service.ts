import { Injectable, ForbiddenException } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/services/usuario.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { PayloadToken } from '../models/token.model';
import { CreateUsuarioDto } from 'src/usuario/dto/create-usuario.dto';
import { UsuarioDto } from 'src/usuario/dto/usuario.dto';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async isActive(user: PayloadToken) {
    const isUserActive = await this.usuarioService.isActive(+user.sub);
    if (!isUserActive) {
      throw new ForbiddenException(`User is not active`);
    }
    return true;
  }

  async validateUser(email: string, pass: string) {
    const user = await this.usuarioService.findByEmail(email);
    if (!user) {
      throw new ForbiddenException(`User not found`);
    }
    console.log('validating', user);
    const isMatch = await bcrypt.compare(pass, user.contrasena);
    if (!isMatch) {
      return null;
    }
    if (!user.Activo) {
      throw new ForbiddenException(`User is not active`);
    }
    console.log(isMatch);
    return user;
  }

  generateJWT(user: UsuarioDto) {
    console.log(user);
    const payload: PayloadToken = {
      sub: user.Id_Usuario.toString(),
      rol: user.Rol,
    };
    return { access_token: this.jwtService.sign(payload) };
  }
}
