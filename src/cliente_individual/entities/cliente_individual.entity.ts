import { ApiProperty } from '@nestjs/swagger';

export class ClienteIndividual {
  @ApiProperty({ description: 'ID del cliente individual' })
  readonly Id_Cliente: number;

  @ApiProperty({ description: 'Primer nombre del cliente' })
  readonly Primer_Nombre: string;

  @ApiProperty({ description: 'Segundo nombre del cliente' })
  readonly Segundo_Nombre: string;

  @ApiProperty({ description: 'Primer apellido del cliente' })
  readonly Primer_Apellido: string;

  @ApiProperty({ description: 'Segundo apellido del cliente' })
  readonly Segundo_Apellido: string;

  @ApiProperty({ description: 'CUI del cliente' })
  readonly Cui: string;

  @ApiProperty({ description: 'NIT del cliente' })
  readonly Nit: string;

  @ApiProperty({ description: 'Teléfono del cliente' })
  readonly Telefono: string;

  @ApiProperty({ description: 'Email del cliente' })
  readonly Email: string;

  @ApiProperty({ description: 'Dirección del cliente' })
  readonly Direccion: string;

  @ApiProperty({ description: 'Estado del cliente' })
  readonly Estado: string;
}
