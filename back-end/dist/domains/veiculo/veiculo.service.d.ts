import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { Veiculo } from './entities/veiculo.entity';
import { Model } from 'mongoose';
export declare class VeiculoService {
    private veiculoModel;
    constructor(veiculoModel: Model<Veiculo>);
    create(createVeiculoDto: CreateVeiculoDto): unknown;
    findAll(): unknown;
    findByModel(modelo: string): unknown;
    update(modelo: string, updateVeiculoDto: UpdateVeiculoDto): unknown;
    remove(modelo: string): unknown;
}
