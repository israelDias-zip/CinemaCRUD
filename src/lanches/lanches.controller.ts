import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LanchesService } from './lanches.service';
import { CreateLanchDto } from './dto/create-lanch.dto';
import { UpdateLanchDto } from './dto/update-lanch.dto';

@ApiTags('lanches')
@Controller('lanches')
export class LanchesController {
  constructor(private readonly lanchesService: LanchesService) {}

  @Post()
  @ApiOperation({ summary: 'Criar lanche/combo' })
  @ApiResponse({ status: 201, description: 'Lanche criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createLanchDto: CreateLanchDto) {
    return this.lanchesService.create(createLanchDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os lanches' })
  @ApiResponse({ status: 200, description: 'Lista de lanches.' })
  findAll() {
    return this.lanchesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar lanche por ID' })
  @ApiResponse({ status: 200, description: 'Lanche encontrado.' })
  @ApiResponse({ status: 404, description: 'Lanche não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.lanchesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar lanche' })
  @ApiResponse({ status: 200, description: 'Lanche atualizado.' })
  update(@Param('id') id: string, @Body() updateLanchDto: UpdateLanchDto) {
    return this.lanchesService.update(+id, updateLanchDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover lanche' })
  @ApiResponse({ status: 200, description: 'Lanche removido.' })
  remove(@Param('id') id: string) {
    return this.lanchesService.remove(+id);
  }
}
