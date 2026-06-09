import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@ApiTags('filmes')
@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post()
  @ApiOperation({ summary: 'Criar filme' })
  @ApiResponse({ status: 201, description: 'Filme criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createFilmeDto: CreateFilmeDto) {
    return this.filmesService.create(createFilmeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os filmes' })
  @ApiResponse({ status: 200, description: 'Lista de filmes.' })
  findAll() {
    return this.filmesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar filme por ID' })
  @ApiResponse({ status: 200, description: 'Filme encontrado.' })
  @ApiResponse({ status: 404, description: 'Filme não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.filmesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar filme' })
  @ApiResponse({ status: 200, description: 'Filme atualizado.' })
  update(@Param('id') id: string, @Body() updateFilmeDto: UpdateFilmeDto) {
    return this.filmesService.update(+id, updateFilmeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover filme' })
  @ApiResponse({ status: 200, description: 'Filme removido.' })
  remove(@Param('id') id: string) {
    return this.filmesService.remove(+id);
  }
}
