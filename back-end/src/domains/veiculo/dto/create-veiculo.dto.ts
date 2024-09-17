import {IsNumber, IsString } from 'class-validator';

export class CreateVeiculoDto {
  @IsString()
  modelo: string;

  @IsNumber()
  anoFabricacao: number;

  @IsString()
  placa: string;
}
