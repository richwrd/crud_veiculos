import { CreateAcessorioDto } from './dto/create-acessorio.dto';
import { UpdateAcessorioDto } from './dto/update-acessorio.dto';
export declare class AcessorioService {
    create(createAcessorioDto: CreateAcessorioDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAcessorioDto: UpdateAcessorioDto): string;
    remove(id: number): string;
}
