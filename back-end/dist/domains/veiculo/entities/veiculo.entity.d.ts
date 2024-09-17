import { HydratedDocument } from 'mongoose';
export type VeiculoDocument = HydratedDocument<Veiculo>;
export declare class Veiculo {
    modelo: string;
    anoFabricacao: number;
    placa: string;
}
export declare const VeiculoSchema: any;
