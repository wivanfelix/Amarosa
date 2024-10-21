import { ApiProperty } from '@nestjs/swagger';

export class Abono {
  @ApiProperty({ description: 'ID del abono' })
  readonly Id_Abono: number;

  @ApiProperty({ description: 'ID del crédito relacionado' })
  readonly Id_Credito: number;

  @ApiProperty({ description: 'ID del cobrador relacionado' })
  readonly Id_Cobrador: number;

  @ApiProperty({ description: 'Monto del abono' })
  readonly Monto: number;

  @ApiProperty({ description: 'Fecha del abono' })
  readonly Fecha: Date;
}
