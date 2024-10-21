import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmail,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteIndividualDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Primer nombre del cliente' })
  readonly primerNombre: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Segundo nombre del cliente' })
  readonly segundoNombre?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Primer apellido del cliente' })
  readonly primerApellido: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Segundo apellido del cliente' })
  readonly segundoApellido?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'CUI del cliente' })
  readonly cui: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'NIT del cliente' })
  readonly nit?: string;

  @Length(8, 8)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Teléfono del cliente' })
  readonly telefono: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'Email del cliente' })
  readonly email: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Dirección del cliente' })
  readonly direccion?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Estado del cliente' })
  readonly estado: string;
}
