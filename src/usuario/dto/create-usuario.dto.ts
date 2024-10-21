import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmail,
  IsIn,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nombre del usuario' })
  readonly nombre: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Apellido del usuario' })
  readonly apellido: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['cobrador', 'cliente', 'admin'])
  @ApiProperty({ description: 'Rol del usuario: cobrador, cliente o admin' })
  readonly rol: string;

  @IsString()
  @IsOptional()
  @IsIn(['individual', 'empresa'])
  @ApiProperty({
    description: 'Tipo de cliente: individual o empresa (opcional)',
  })
  readonly tipoCliente?: string;

  @IsOptional()
  @ApiProperty({ description: 'ID del cliente empresa (opcional)' })
  readonly Id_Cliente_Empresa?: number;

  @IsOptional()
  @ApiProperty({ description: 'ID del cliente individual (opcional)' })
  readonly Id_Cliente_Individual?: number;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'Email del usuario' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Contraseña del usuario' })
  readonly contrasena: string;
}
