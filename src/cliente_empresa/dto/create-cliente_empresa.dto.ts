import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmail,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteEmpresaDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Razón social de la empresa' })
  readonly razonSocial: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Nombre comercial de la empresa' })
  readonly nombreComercial?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'NIT de la empresa' })
  readonly nit: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Nombre del contacto' })
  readonly nombreContacto?: string;

  @Length(8, 8)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Teléfono del contacto' })
  readonly telefono: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'Email del contacto' })
  readonly email: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Dirección de la empresa' })
  readonly direccion?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Estado de la empresa' })
  readonly estado: string;
}
