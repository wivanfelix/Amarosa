import { IsString, IsOptional, IsEmail, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCobradorDto {
  @IsString()
  @IsOptional()
  @Length(8, 8)
  @ApiProperty({ description: 'Teléfono del cobrador', example: '12345678' })
  readonly telefono?: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty({
    description: 'Email del cobrador',
    example: 'email@example.com',
  })
  readonly email?: string;
}
