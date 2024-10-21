import { IsNotEmpty, IsNumber, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAbonoDto {
  @IsNotEmpty()
  @ApiProperty({ description: 'Id del crédito asociado' })
  readonly Id_Credito: number;

  @IsNotEmpty()
  @ApiProperty({ description: 'Id del cobrador' })
  readonly Id_Cobrador: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Monto del abono' })
  readonly monto: number;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ description: 'Fecha del abono' })
  readonly fecha: Date;
}
