import { HydratedDocument } from 'mongoose';
export type AcessorioDocument = HydratedDocument<Acessorio>;
export declare class Acessorio {
    nome: string;
}
export declare const AcessorioSchema: import("mongoose").Schema<Acessorio, import("mongoose").Model<Acessorio, any, any, any, import("mongoose").Document<unknown, any, Acessorio> & Acessorio & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Acessorio, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Acessorio>> & import("mongoose").FlatRecord<Acessorio> & {
    _id: import("mongoose").Types.ObjectId;
}>;
