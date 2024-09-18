import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { Veiculo } from './entities/veiculo.entity';
import { Model } from 'mongoose';
export declare class VeiculoService {
    private veiculoModel;
    constructor(veiculoModel: Model<Veiculo>);
    create(createVeiculoDto: CreateVeiculoDto): Promise<import("mongoose").Document<unknown, {}, Veiculo> & Veiculo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Veiculo> & Veiculo & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findByModel(modelo: string): Promise<import("mongoose").Document<unknown, {}, Veiculo> & Veiculo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(modelo: string, updateVeiculoDto: UpdateVeiculoDto): Promise<import("mongoose").Document<unknown, {}, Veiculo> & Veiculo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(modelo: string): Promise<import("mongoose").Document<unknown, {}, Veiculo> & Veiculo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addAcessorio(modelo: string, acessorioId: string): Promise<import("mongoose").Document<unknown, {}, Veiculo> & Veiculo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeAcessorio(modelo: string, acessorioId: string): Promise<import("mongoose").Document<unknown, {}, Veiculo> & Veiculo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
