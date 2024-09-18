import { VeiculoService } from './veiculo.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
export declare class VeiculoController {
    private readonly veiculoService;
    constructor(veiculoService: VeiculoService);
    create(createVeiculoDto: CreateVeiculoDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/veiculo.entity").Veiculo> & import("./entities/veiculo.entity").Veiculo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/veiculo.entity").Veiculo> & import("./entities/veiculo.entity").Veiculo & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(modelo: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/veiculo.entity").Veiculo> & import("./entities/veiculo.entity").Veiculo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(modelo: string, updateVeiculoDto: UpdateVeiculoDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/veiculo.entity").Veiculo> & import("./entities/veiculo.entity").Veiculo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(modelo: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/veiculo.entity").Veiculo> & import("./entities/veiculo.entity").Veiculo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addAcessorio(modelo: string, acessorioId: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/veiculo.entity").Veiculo> & import("./entities/veiculo.entity").Veiculo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeAcessorio(modelo: string, acessorioId: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/veiculo.entity").Veiculo> & import("./entities/veiculo.entity").Veiculo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
