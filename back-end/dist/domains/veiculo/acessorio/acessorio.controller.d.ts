import { AcessorioService } from './acessorio.service';
import { CreateAcessorioDto } from './dto/create-acessorio.dto';
import { UpdateAcessorioDto } from './dto/update-acessorio.dto';
export declare class AcessorioController {
    private readonly acessorioService;
    constructor(acessorioService: AcessorioService);
    create(createAcessorioDto: CreateAcessorioDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/acessorio.entity").Acessorio> & import("./entities/acessorio.entity").Acessorio & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/acessorio.entity").Acessorio> & import("./entities/acessorio.entity").Acessorio & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/acessorio.entity").Acessorio> & import("./entities/acessorio.entity").Acessorio & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateAcessorioDto: UpdateAcessorioDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/acessorio.entity").Acessorio> & import("./entities/acessorio.entity").Acessorio & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/acessorio.entity").Acessorio> & import("./entities/acessorio.entity").Acessorio & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
