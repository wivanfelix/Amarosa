import { IsString, IsOptional, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCarteraDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Nombre del contacto' })
  readonly nombreContacto?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Teléfono de la cartera' })
  readonly telefono?: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty({ description: 'Email de la cartera' })
  readonly email?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Dirección de la cartera' })
  readonly direccion?: string;
}
