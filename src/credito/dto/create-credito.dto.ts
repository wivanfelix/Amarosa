import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDate,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCreditoDto {
  @IsNotEmpty()
  @ApiProperty({ description: 'Id de la solicitud de cobranza' })
  readonly Id_Solicitud: number;

  @IsNotEmpty()
  @ApiProperty({ description: 'Id del deudor' })
  readonly Id_Deudor: number;

  @IsNotEmpty()
  @ApiProperty({ description: 'Id del cobrador' })
  readonly Id_Cobrador: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Tipo de crédito' })
  readonly tipoCredito: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Tipo de cliente (Individual o Empresa)' })
  readonly tipoCliente: string;

  @IsOptional()
  @ApiProperty({ description: 'Id del cliente individual' })
  readonly Id_ClienteIndividual?: number;

  @IsOptional()
  @ApiProperty({ description: 'Id del cliente empresa' })
  readonly Id_ClienteEmpresa?: number;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ description: 'Fecha de inicio de cobro' })
  readonly fechaInicioCobro: Date;

  @IsDate()
  @IsOptional()
  @ApiProperty({ description: 'Fecha de fin de cobro' })
  readonly fechaFinCobro?: Date;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Monto inicial del crédito' })
  readonly montoInicial: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Tasa de mora' })
  readonly tasaMora: number;

  @IsDate()
  @IsOptional()
  @ApiProperty({ description: 'Fecha inicial de mora' })
  readonly fechaInicialMora?: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Estado del crédito' })
  readonly estado: string;
}
