import { CreateAcessorioDto } from './dto/create-acessorio.dto';
import { UpdateAcessorioDto } from './dto/update-acessorio.dto';
import { Acessorio } from './entities/acessorio.entity';
import { Model } from 'mongoose';
export declare class AcessorioService {
    private acessorioModel;
    constructor(acessorioModel: Model<Acessorio>);
    create(createAcessorioDto: CreateAcessorioDto): Promise<import("mongoose").Document<unknown, {}, Acessorio> & Acessorio & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Acessorio> & Acessorio & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Acessorio> & Acessorio & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateAcessorioDto: UpdateAcessorioDto): Promise<import("mongoose").Document<unknown, {}, Acessorio> & Acessorio & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, Acessorio> & Acessorio & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
