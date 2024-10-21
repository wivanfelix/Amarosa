import { ApiProperty } from '@nestjs/swagger';

export class Deudor {
  @ApiProperty({ description: 'ID del deudor' })
  readonly Id_Deudor: number;

  @ApiProperty({ description: 'Primer nombre del deudor' })
  readonly Primer_Nombre: string;

  @ApiProperty({ description: 'Segundo nombre del deudor' })
  readonly Segundo_Nombre: string;

  @ApiProperty({ description: 'Primer apellido del deudor' })
  readonly Primer_Apellido: string;

  @ApiProperty({ description: 'Segundo apellido del deudor' })
  readonly Segundo_Apellido: string;

  @ApiProperty({ description: 'CUI del deudor' })
  readonly Cui: string;

  @ApiProperty({ description: 'Teléfono del deudor' })
  readonly Telefono: string;

  @ApiProperty({ description: 'Dirección del deudor' })
  readonly Direccion: string;

  @ApiProperty({ description: 'Lugar de trabajo del deudor' })
  readonly Lugar_Trabajo: string;

  @ApiProperty({ description: 'Dirección de trabajo del deudor' })
  readonly Direccion_Trabajo: string;

  @ApiProperty({ description: 'Teléfono de trabajo del deudor' })
  readonly Telefono_Trabajo: string;
}
