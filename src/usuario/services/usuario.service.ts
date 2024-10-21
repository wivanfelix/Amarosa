import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
// import { Role } from 'src/auth/models/roles.models';
import { DatabaseService } from 'src/database/services/database.service';

@Injectable()
export class UsuarioService {
  constructor(private readonly databaseService: DatabaseService) {}

  // async exists(email: string): Promise<boolean> {
  //   const users = await this.databaseService.usuario.count({
  //     where: { email },
  //   });
  //   return users > 0;
  // }

  // async findAll() {
  //   return await this.databaseService.usuario.findMany();
  // }

  // async findOne(id: number) {
  //   const user = await this.databaseService.usuario.findUnique({
  //     where: { Id_Usuario: id },
  //   });
  //   if (!user) {
  //     throw new NotFoundException(`User #${id} not found`);
  //   }
  //   return user;
  // }

  // async findByEmail(email: string) {
  //   const user = await this.databaseService.usuario.findFirst({
  //     where: { email },
  //   });
  //   if (!user) {
  //     throw new NotFoundException(`User with email ${email} not found`);
  //   }
  //   return user;
  // }

  // async isActive(id: number) {
  //   const user = await this.findOne(id);
  //   return user.Activo;
  // }

  // async generatePassword() {
  //   const newPassword = `${Math.floor(Math.random() * 10)}${Math.random()
  //     .toString(36)
  //     .replace(/[^a-z]+/g, '')}${Math.floor(Math.random() * 10)}`;

  //   const hashedPassword = await bcrypt.hash(newPassword, 10);

  //   return { newPassword, hashedPassword };
  // }

  // // Crear usuario admin
  // async createAdmin(createUsuarioDto: CreateUsuarioDto) {
  //   const hashedPassword = await bcrypt.hash(createUsuarioDto.contrasena, 10);

  //   // Crear usuario como admin
  //   const user = await this.databaseService.usuario.create({
  //     data: {
  //       Nombre: createUsuarioDto.nombre,
  //       Apellido: createUsuarioDto.apellido,
  //       email: createUsuarioDto.email,
  //       contrasena: hashedPassword,
  //       Rol: Role.ADMIN,
  //       Activo: true,
  //     },
  //   });

  //   return { user, password: createUsuarioDto.contrasena };
  // }

  // // Crear usuario asociado a una empresa
  // async createCompanyUser(createUsuarioDto: CreateUsuarioDto) {
  //   const hashedPassword = await bcrypt.hash(createUsuarioDto.contrasena, 10);

  //   // Manejar la relación con cliente_empresa si existe el ID
  //   const user = await this.databaseService.usuario.create({
  //     data: {
  //       Nombre: createUsuarioDto.nombre,
  //       Apellido: createUsuarioDto.apellido,
  //       email: createUsuarioDto.email,
  //       contrasena: hashedPassword,
  //       Rol: Role.CLIENTE, // Definido como CLIENTE
  //       Tipo_Cliente: 'empresa', // Definir que es empresa
  //       Activo: true,
  //       ...(createUsuarioDto.Id_Cliente_Empresa && {
  //         cliente_empresa: {
  //           connect: { Id_Cliente: createUsuarioDto.Id_Cliente_Empresa },
  //         },
  //       }),
  //     },
  //   });

  //   return { user, password: createUsuarioDto.contrasena };
  // }

  // // Crear usuario asociado a un cliente individual
  // async createIndividualUser(createUsuarioDto: CreateUsuarioDto) {
  //   const hashedPassword = await bcrypt.hash(createUsuarioDto.contrasena, 10);

  //   // Manejar la relación con cliente_individual si existe el ID
  //   const user = await this.databaseService.usuario.create({
  //     data: {
  //       Nombre: createUsuarioDto.nombre,
  //       Apellido: createUsuarioDto.apellido,
  //       email: createUsuarioDto.email,
  //       contrasena: hashedPassword,
  //       Rol: Role.CLIENTE, // Definido como CLIENTE
  //       Tipo_Cliente: 'individual', // Definir que es individual
  //       Activo: true,
  //       ...(createUsuarioDto.Id_Cliente_Individual && {
  //         cliente_individual: {
  //           connect: { Id_Cliente: createUsuarioDto.Id_Cliente_Individual },
  //         },
  //       }),
  //     },
  //   });

  //   return { user, password: createUsuarioDto.contrasena };
  // }

  // // Crear usuario de tipo cobrador
  // async createCobradorUser(createUsuarioDto: CreateUsuarioDto) {
  //   const hashedPassword = await bcrypt.hash(createUsuarioDto.contrasena, 10);

  //   // Manejar la relación con cartera si existe el ID de la cartera
  //   const user = await this.databaseService.usuario.create({
  //     data: {
  //       Nombre: createUsuarioDto.nombre,
  //       Apellido: createUsuarioDto.apellido,
  //       email: createUsuarioDto.email,
  //       contrasena: hashedPassword,
  //       Rol: 'cobrador', // Definir el rol como 'cobrador'
  //       Activo: true,
  //       ...(createUsuarioDto.Id_Cliente_Empresa && {
  //         cliente_empresa: {
  //           connect: { Id_Cliente: createUsuarioDto.Id_Cliente_Empresa },
  //         },
  //       }),
  //       ...(createUsuarioDto.Id_Cliente_Individual && {
  //         cliente_individual: {
  //           connect: { Id_Cliente: createUsuarioDto.Id_Cliente_Individual },
  //         },
  //       }),
  //     },
  //   });

  //   return user;
  // }
}
