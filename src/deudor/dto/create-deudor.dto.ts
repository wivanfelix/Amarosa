import {
  IsString,
  IsNotEmpty,
  IsOptional,
  Length,
  IsInt,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDeudorDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Primer nombre del deudor' })
  readonly primerNombre: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Segundo nombre del deudor' })
  readonly segundoNombre?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Primer apellido del deudor' })
  readonly primerApellido: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Segundo apellido del deudor' })
  readonly segundoApellido?: string;

  @Length(13, 13)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'CUI del deudor' })
  readonly cui: string;

  @Length(8, 8)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Teléfono del deudor' })
  readonly telefono: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Dirección del deudor' })
  readonly direccion?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Lugar de trabajo del deudor' })
  readonly lugarTrabajo?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Dirección de trabajo del deudor' })
  readonly direccionTrabajo?: string;

  @Length(8, 8)
  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Teléfono de trabajo del deudor' })
  readonly telefonoTrabajo?: string;

  @IsInt()
  @IsOptional()
  @ApiProperty({ description: 'Localizable (1: sí, 0: no)', default: 1 })
  readonly localizable: number = 1;
}
