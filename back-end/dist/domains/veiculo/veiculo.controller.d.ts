import { VeiculoService } from './veiculo.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
export declare class VeiculoController {
    private readonly veiculoService;
    constructor(veiculoService: VeiculoService);
    create(createVeiculoDto: CreateVeiculoDto): unknown;
    findAll(): unknown;
    findOne(modelo: string): unknown;
    update(modelo: string, updateVeiculoDto: UpdateVeiculoDto): unknown;
    remove(modelo: string): unknown;
}
