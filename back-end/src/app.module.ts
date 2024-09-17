import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VeiculoModule } from './domains/veiculo/veiculo.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/veiculos'),
    VeiculoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
