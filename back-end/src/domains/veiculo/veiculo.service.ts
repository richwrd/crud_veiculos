import { Injectable } from '@nestjs/common';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Veiculo } from './entities/veiculo.entity';
import { Model } from 'mongoose';

@Injectable()
export class VeiculoService {

  constructor(@InjectModel(Veiculo.name) private veiculoModel: Model<Veiculo>) {}

  async create(createVeiculoDto: CreateVeiculoDto) {
    return await this.veiculoModel.create(createVeiculoDto);
  }

  async findAll() {
    return await this.veiculoModel.find().exec();
  }

  async findByModel(modelo: string) {
    return await this.veiculoModel.findOne({ modelo: modelo });
  }

  async update(modelo: string, updateVeiculoDto: UpdateVeiculoDto) {
    return await this.veiculoModel.findOneAndUpdate({ modelo: modelo }, updateVeiculoDto, {new : true} );
  }

  async remove(modelo: string) {
    return await this.veiculoModel.findOneAndDelete({ modelo: modelo });
  }

  async addAcessorio(modelo: string, acessorioId: string) {
    return await this.veiculoModel.findOneAndUpdate({ modelo: modelo }, { $push: { acessorios: acessorioId } }, { new: true }
    );
  }

  async removeAcessorio(modelo: string, acessorioId: string) {
    return await this.veiculoModel.findOneAndUpdate({ modelo: modelo }, { $pull: { acessorios: acessorioId } }, { new: true }
    );
  }
}
