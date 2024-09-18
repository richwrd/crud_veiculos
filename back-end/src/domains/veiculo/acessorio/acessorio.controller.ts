import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcessorioService } from './acessorio.service';
import { CreateAcessorioDto } from './dto/create-acessorio.dto';
import { UpdateAcessorioDto } from './dto/update-acessorio.dto';

@Controller('acessorio')
export class AcessorioController {
  constructor(private readonly acessorioService: AcessorioService) {}

  @Post()
  async create(@Body() createAcessorioDto: CreateAcessorioDto) {
    return this.acessorioService.create(createAcessorioDto);
  }

  @Get()
  async findAll() {
    return this.acessorioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.acessorioService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAcessorioDto: UpdateAcessorioDto) {
    return this.acessorioService.update(id, updateAcessorioDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.acessorioService.remove(id);
  }
}
