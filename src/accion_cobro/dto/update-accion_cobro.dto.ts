import { PartialType } from '@nestjs/mapped-types';
import { CreateAccionCobroDto } from './create-accion_cobro.dto';

export class UpdateAccionCobroDto extends PartialType(CreateAccionCobroDto) {}
