import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteEmpresaDto } from './create-cliente_empresa.dto';

export class UpdateClienteEmpresaDto extends PartialType(CreateClienteEmpresaDto) {}
