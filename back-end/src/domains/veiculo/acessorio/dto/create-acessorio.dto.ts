import {IsString } from 'class-validator';

export class CreateAcessorioDto {
  @IsString()
  nome: string;
}
