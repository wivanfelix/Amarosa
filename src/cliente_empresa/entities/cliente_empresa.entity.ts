import { ApiProperty } from '@nestjs/swagger';

export class ClienteEmpresa {
  @ApiProperty({ description: 'ID del cliente empresa' })
  readonly Id_Cliente: number;

  @ApiProperty({ description: 'Razón social de la empresa' })
  readonly Razon_Social: string;

  @ApiProperty({ description: 'Nombre comercial de la empresa' })
  readonly Nombre_Comercial: string;

  @ApiProperty({ description: 'NIT de la empresa' })
  readonly Nit: string;

  @ApiProperty({ description: 'Nombre del contacto' })
  readonly Nombre_Contacto: string;

  @ApiProperty({ description: 'Teléfono de la empresa' })
  readonly Telefono: string;

  @ApiProperty({ description: 'Email de la empresa' })
  readonly Email: string;

  @ApiProperty({ description: 'Dirección de la empresa' })
  readonly Direccion: string;

  @ApiProperty({ description: 'Estado de la empresa' })
  readonly Estado: string;
}
