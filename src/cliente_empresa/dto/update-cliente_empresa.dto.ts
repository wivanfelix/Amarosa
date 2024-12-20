import { IsString, IsOptional, IsEmail, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateClienteEmpresaDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Nombre del contacto' })
  readonly nombreContacto?: string;

  @Length(8, 8)
  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Teléfono del contacto' })
  readonly telefono?: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty({ description: 'Email del contacto' })
  readonly email?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Dirección de la empresa' })
  readonly direccion?: string;
}
