import { PartialType } from '@nestjs/mapped-types';
import { CreateAcessorioDto } from './create-acessorio.dto';

export class UpdateAcessorioDto extends PartialType(CreateAcessorioDto) {}
