
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Acessorio } from '../acessorio/entities/acessorio.entity';

export type VeiculoDocument = HydratedDocument<Veiculo>;

@Schema()
export class Veiculo {
  @Prop()
  modelo: string;

  @Prop()
  anoFabricacao: number;

  @Prop()
  placa: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Acessorio' }] })
  acessorios: Types.ObjectId[]; 

}

export const VeiculoSchema = SchemaFactory.createForClass(Veiculo);
