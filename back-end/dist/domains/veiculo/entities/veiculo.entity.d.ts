import { HydratedDocument, Types } from 'mongoose';
export type VeiculoDocument = HydratedDocument<Veiculo>;
export declare class Veiculo {
    modelo: string;
    anoFabricacao: number;
    placa: string;
    acessorios: Types.ObjectId[];
}
export declare const VeiculoSchema: import("mongoose").Schema<Veiculo, import("mongoose").Model<Veiculo, any, any, any, import("mongoose").Document<unknown, any, Veiculo> & Veiculo & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Veiculo, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Veiculo>> & import("mongoose").FlatRecord<Veiculo> & {
    _id: Types.ObjectId;
}>;
