import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmail,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSolicitudCobranzaDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Tipo de crédito' })
  readonly tipoCredito: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nombres del cliente' })
  readonly nombresCliente: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Apellidos del cliente' })
  readonly apellidosCliente: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Empresa del cliente' })
  readonly empresaCliente?: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'Email del cliente' })
  readonly emailCliente: string;

  @Length(8, 8)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Teléfono del cliente' })
  readonly telefonoCliente: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Monto del crédito' })
  readonly montoCredito: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Días en mora' })
  readonly diasEnMora: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Primer nombre del deudor' })
  readonly primerNombreDeudor: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Segundo nombre del deudor' })
  readonly segundoNombreDeudor?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Primer apellido del deudor' })
  readonly primerApellidoDeudor: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Segundo apellido del deudor' })
  readonly segundoApellidoDeudor?: string;

  @Length(13, 13)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'CUI del deudor' })
  readonly cuiDeudor: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Estado de la solicitud' })
  readonly estado: string;
}
