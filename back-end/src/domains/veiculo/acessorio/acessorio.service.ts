import { Injectable } from '@nestjs/common';
import { CreateAcessorioDto } from './dto/create-acessorio.dto';
import { UpdateAcessorioDto } from './dto/update-acessorio.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Acessorio } from './entities/acessorio.entity';
import { Model } from 'mongoose';

@Injectable()
export class AcessorioService {

constructor(@InjectModel(Acessorio.name) private acessorioModel: Model<Acessorio>) {}

  async create(createAcessorioDto: CreateAcessorioDto) {
    return await this.acessorioModel.create(createAcessorioDto);
  }

  async findAll() {
    return await this.acessorioModel.find().exec();
  }

  async findOne(id: string) {
    return await this.acessorioModel.findOne({ _id: id });
  }

  async update(id: string, updateAcessorioDto: UpdateAcessorioDto) {
    return await this.acessorioModel.findOneAndUpdate({ _id: id}, updateAcessorioDto, {new : true});
  }

  async remove(id: string) {
    return await this.acessorioModel.findOneAndDelete({ _id : id });
  }
}
