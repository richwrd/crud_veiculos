import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VeiculoService } from './veiculo.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';

@Controller('veiculo')
export class VeiculoController {
  constructor(private readonly veiculoService: VeiculoService) {}

  @Post()
  async create(@Body() createVeiculoDto: CreateVeiculoDto) {
    return this.veiculoService.create(createVeiculoDto);
  }

  @Get()
  async findAll() {
    return this.veiculoService.findAll();
  }

  @Get(':modelo')
  async findOne(@Param('modelo') modelo: string) {
    return this.veiculoService.findByModel(modelo);
  }

  //entendo que o ideal é utilizar o id e não uma propriedade no campo de busca
  @Patch(':modelo')
  async update(@Param('modelo') modelo: string, @Body() updateVeiculoDto: UpdateVeiculoDto) {
    return this.veiculoService.update(modelo, updateVeiculoDto);
  }

  @Delete(':modelo')
  async remove(@Param('modelo') modelo: string) {
    return this.veiculoService.remove(modelo);
  }

  @Post(':modelo/acessorio/:acessorioId')
  async addAcessorio(@Param('modelo') modelo: string, @Param('acessorioId') acessorioId: string) {
    return this.veiculoService.addAcessorio(modelo, acessorioId);
  }

  @Post(':modelo/acessorio-rm/:acessorioId')
  async removeAcessorio(@Param('modelo') modelo: string, @Param('acessorioId') acessorioId: string) {
    return this.veiculoService.removeAcessorio(modelo, acessorioId);
  }
}
