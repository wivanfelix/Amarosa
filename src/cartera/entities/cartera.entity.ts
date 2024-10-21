import { ApiProperty } from '@nestjs/swagger';

export class Cartera {
  @ApiProperty({ description: 'ID de la cartera' })
  readonly Id_Cartera: number;

  @ApiProperty({ description: 'Nombre de la cartera' })
  readonly Nombre: string;

  @ApiProperty({ description: 'Nombre del contacto' })
  readonly Nombre_Contacto: string;

  @ApiProperty({ description: 'Teléfono de la cartera' })
  readonly Telefono: string;

  @ApiProperty({ description: 'Email de la cartera' })
  readonly Email: string;

  @ApiProperty({ description: 'Dirección de la cartera' })
  readonly Direccion: string;
}
