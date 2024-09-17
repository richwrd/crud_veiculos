import { Module } from '@nestjs/common';
import { AcessorioService } from './acessorio.service';
import { AcessorioController } from './acessorio.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Acessorio, AcessorioSchema } from './entities/acessorio.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Acessorio.name, schema: AcessorioSchema }])],
  controllers: [AcessorioController],
  providers: [AcessorioService],
})
export class AcessorioModule {}
