import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VeiculoService } from './veiculo.service';
import { VeiculoController } from './veiculo.controller';
import { Veiculo, VeiculoSchema } from './entities/veiculo.entity';
import { AcessorioModule } from './acessorio/acessorio.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Veiculo.name, schema: VeiculoSchema }]), AcessorioModule],
  controllers: [VeiculoController],
  providers: [VeiculoService],
})
export class VeiculoModule {}
