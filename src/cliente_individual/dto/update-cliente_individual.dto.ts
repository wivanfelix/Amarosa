import { IsString, IsOptional, IsEmail, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateClienteIndividualDto {
  @Length(8, 8)
  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Teléfono del cliente' })
  readonly telefono?: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty({ description: 'Email del cliente' })
  readonly email?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Dirección del cliente' })
  readonly direccion?: string;
}
