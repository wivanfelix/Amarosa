import { ApiProperty } from '@nestjs/swagger';

export class AccionCobro {
  @ApiProperty({ description: 'ID de la acción de cobro' })
  readonly Id_Accion: number;

  @ApiProperty({ description: 'ID del crédito relacionado' })
  readonly Id_Credito: number;

  @ApiProperty({ description: 'ID del cobrador relacionado' })
  readonly Id_Cobrador: number;

  @ApiProperty({ description: 'Tipo de acción de cobro' })
  readonly Tipo: string;

  @ApiProperty({ description: 'Fecha de la acción de cobro' })
  readonly Fecha: Date;

  @ApiProperty({ description: 'Estatus de la acción de cobro' })
  readonly Estatus: string;
}
