
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VeiculoDocument = HydratedDocument<Veiculo>;

@Schema()
export class Veiculo {
  @Prop()
  modelo: string;

  @Prop()
  anoFabricacao: number;

  @Prop()
  placa: string;

}

export const VeiculoSchema = SchemaFactory.createForClass(Veiculo);
