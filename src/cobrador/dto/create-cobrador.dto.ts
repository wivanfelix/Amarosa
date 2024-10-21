import {
  IsString,
  IsNotEmpty,
  IsOptional,
  Length,
  IsEmail,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCobradorDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Código del cobrador' })
  readonly Codigo_Cobrador: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Id de la cartera asociada' })
  readonly idCartera: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Primer nombre del cobrador' })
  readonly primerNombre: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Segundo nombre del cobrador' })
  readonly segundoNombre?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Primer apellido del cobrador' })
  readonly primerApellido: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Segundo apellido del cobrador' })
  readonly segundoApellido?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'CUI del cobrador' })
  readonly cui: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'NIT del cobrador' })
  readonly nit?: string;

  @Length(8, 8)
  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Teléfono del cobrador' })
  readonly telefono?: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty({ description: 'Email del cobrador' })
  readonly email?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Estado del cobrador' })
  readonly estado: string;
}
