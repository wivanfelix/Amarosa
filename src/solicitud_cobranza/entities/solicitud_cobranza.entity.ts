import { ApiProperty } from '@nestjs/swagger';

export class SolicitudCobranza {
  @ApiProperty({ description: 'ID de la solicitud de cobranza' })
  readonly Id_Solicitud: number;

  @ApiProperty({ description: 'Tipo de crédito de la solicitud' })
  readonly Tipo_Credito: string;

  @ApiProperty({ description: 'Nombres del cliente' })
  readonly Nombres_Cliente: string;

  @ApiProperty({ description: 'Apellidos del cliente' })
  readonly Apellidos_Cliente: string;

  @ApiProperty({ description: 'Empresa del cliente' })
  readonly Empresa_Cliente: string;

  @ApiProperty({ description: 'Email del cliente' })
  readonly Email_Cliente: string;

  @ApiProperty({ description: 'Teléfono del cliente' })
  readonly Telefono_Cliente: string;

  @ApiProperty({ description: 'Monto del crédito' })
  readonly Monto_Credito: string;

  @ApiProperty({ description: 'Días en mora' })
  readonly Dias_En_Mora: string;

  @ApiProperty({ description: 'Primer nombre del deudor' })
  readonly Primer_Nombre_Deudor: string;

  @ApiProperty({ description: 'Segundo nombre del deudor' })
  readonly Segundo_Nombre_Deudor: string;

  @ApiProperty({ description: 'Primer apellido del deudor' })
  readonly Primer_Apellido_Deudor: string;

  @ApiProperty({ description: 'Segundo apellido del deudor' })
  readonly Segundo_Apellido_Deudor: string;

  @ApiProperty({ description: 'CUI del deudor' })
  readonly Cui_Deudor: string;

  @ApiProperty({ description: 'Estado de la solicitud' })
  readonly Estado: string;
}
