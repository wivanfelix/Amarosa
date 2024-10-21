import { IsString, IsOptional, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDeudorDto {
  @IsString()
  @IsOptional()
  @Length(8, 8)
  @ApiProperty({ description: 'Teléfono del deudor', example: '12345678' })
  readonly telefono?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Dirección del deudor',
    example: 'Calle 123, Ciudad',
  })
  readonly direccion?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Lugar de trabajo del deudor',
    example: 'Empresa XYZ',
  })
  readonly lugarTrabajo?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Dirección de trabajo del deudor',
    example: 'Av. Empresa, Oficina 45',
  })
  readonly direccionTrabajo?: string;

  @IsString()
  @IsOptional()
  @Length(8, 8)
  @ApiProperty({
    description: 'Teléfono de trabajo del deudor',
    example: '87654321',
  })
  readonly telefonoTrabajo?: string;
}
