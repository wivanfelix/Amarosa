import { ApiProperty } from '@nestjs/swagger';

export class Cobrador {
  @ApiProperty({ description: 'ID del cobrador' })
  readonly Id_Cobrador: number;

  @ApiProperty({ description: 'Código del cobrador' })
  readonly Codigo_Cobrador: string;

  @ApiProperty({ description: 'ID de la cartera asociada' })
  readonly Id_Cartera: number;

  @ApiProperty({ description: 'Primer nombre del cobrador' })
  readonly Primer_Nombre: string;

  @ApiProperty({ description: 'Segundo nombre del cobrador' })
  readonly Segundo_Nombre: string;

  @ApiProperty({ description: 'Primer apellido del cobrador' })
  readonly Primer_Apellido: string;

  @ApiProperty({ description: 'Segundo apellido del cobrador' })
  readonly Segundo_Apellido: string;

  @ApiProperty({ description: 'CUI del cobrador' })
  readonly Cui: string;

  @ApiProperty({ description: 'NIT del cobrador' })
  readonly Nit: string;

  @ApiProperty({ description: 'Teléfono del cobrador' })
  readonly Telefono: string;

  @ApiProperty({ description: 'Email del cobrador' })
  readonly Email: string;

  @ApiProperty({ description: 'Estado del cobrador' })
  readonly Estado: string;
}
