import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcessorioService } from './acessorio.service';
import { CreateAcessorioDto } from './dto/create-acessorio.dto';
import { UpdateAcessorioDto } from './dto/update-acessorio.dto';

@Controller('acessorio')
export class AcessorioController {
  constructor(private readonly acessorioService: AcessorioService) {}

  @Post()
  create(@Body() createAcessorioDto: CreateAcessorioDto) {
    return this.acessorioService.create(createAcessorioDto);
  }

  @Get()
  findAll() {
    return this.acessorioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.acessorioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcessorioDto: UpdateAcessorioDto) {
    return this.acessorioService.update(+id, updateAcessorioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.acessorioService.remove(+id);
  }
}
