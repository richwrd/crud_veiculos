import { Injectable } from '@nestjs/common';
import { CreateAcessorioDto } from './dto/create-acessorio.dto';
import { UpdateAcessorioDto } from './dto/update-acessorio.dto';

@Injectable()
export class AcessorioService {
  create(createAcessorioDto: CreateAcessorioDto) {
    return 'This action adds a new acessorio';
  }

  findAll() {
    return `This action returns all acessorio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} acessorio`;
  }

  update(id: number, updateAcessorioDto: UpdateAcessorioDto) {
    return `This action updates a #${id} acessorio`;
  }

  remove(id: number) {
    return `This action removes a #${id} acessorio`;
  }
}
