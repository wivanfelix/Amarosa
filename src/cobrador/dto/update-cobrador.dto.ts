import { IsString, IsOptional, IsIn, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCobradorDto {
  @IsString()
  @IsOptional()
  @Length(8, 8)
  @ApiProperty({ description: 'Teléfono del cobrador', example: '12345678' })
  readonly telefono?: string;

  @IsString()
  @IsIn(['activo', 'inactivo', 'suspendido'])
  @IsOptional()
  @ApiProperty({
    description: 'Estado del cobrador: activo, inactivo o suspendido',
    example: 'activo',
  })
  readonly estado?: string;
}
