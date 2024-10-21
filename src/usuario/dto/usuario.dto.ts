import { ApiProperty } from '@nestjs/swagger';

export class UsuarioDto {
  @ApiProperty({ description: 'ID del usuario' })
  readonly Id_Usuario: number;

  @ApiProperty({ description: 'Nombre del usuario' })
  readonly Nombre: string;

  @ApiProperty({ description: 'Apellido del usuario' })
  readonly Apellido: string;

  @ApiProperty({ description: 'Rol del usuario' })
  readonly Rol: string;

  @ApiProperty({ description: 'Tipo de cliente (individual o empresa)' })
  readonly Tipo_Cliente: string;

  @ApiProperty({ description: 'ID del cliente empresa relacionado' })
  readonly Id_Cliente_Empresa: number;

  @ApiProperty({ description: 'ID del cliente individual relacionado' })
  readonly Id_Cliente_Individual: number;

  @ApiProperty({ description: 'Estado activo del usuario' })
  readonly Activo: boolean;
}
