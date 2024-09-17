import { AcessorioService } from './acessorio.service';
import { CreateAcessorioDto } from './dto/create-acessorio.dto';
import { UpdateAcessorioDto } from './dto/update-acessorio.dto';
export declare class AcessorioController {
    private readonly acessorioService;
    constructor(acessorioService: AcessorioService);
    create(createAcessorioDto: CreateAcessorioDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAcessorioDto: UpdateAcessorioDto): string;
    remove(id: string): string;
}
