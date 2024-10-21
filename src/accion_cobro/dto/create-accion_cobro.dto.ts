import { IsString, IsNotEmpty, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAccionCobroDto {
  @IsNotEmpty()
  @ApiProperty({ description: 'Id del crédito asociado' })
  readonly Id_Credito: number; // Cambiado a Id_Credito

  @IsNotEmpty()
  @ApiProperty({ description: 'Id del cobrador' })
  readonly Id_Cobrador: number; // Cambiado a Id_Cobrador

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Tipo de acción de cobro' })
  readonly Tipo: string; // Cambiado a Tipo

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ description: 'Fecha de la acción de cobro' })
  readonly Fecha: Date; // Cambiado a Fecha

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Estatus de la acción de cobro' })
  readonly Estatus: string; // Cambiado a Estatus
}
