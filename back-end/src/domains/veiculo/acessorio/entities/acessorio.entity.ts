
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AcessorioDocument = HydratedDocument<Acessorio>;

@Schema()
export class Acessorio {
  @Prop()
  nome: string;
}

export const AcessorioSchema = SchemaFactory.createForClass(Acessorio);
