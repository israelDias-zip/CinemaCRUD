import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CinemaService } from './cinema.service';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';

@ApiTags('cinema')
@Controller('cinema')
export class CinemaController {
  constructor(private readonly cinemaService: CinemaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar cinema' })
  @ApiResponse({ status: 201, description: 'Cinema criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createCinemaDto: CreateCinemaDto) {
    return this.cinemaService.create(createCinemaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os cinemas' })
  @ApiResponse({ status: 200, description: 'Lista de cinemas.' })
  findAll() {
    return this.cinemaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar cinema por ID' })
  @ApiResponse({ status: 200, description: 'Cinema encontrado.' })
  @ApiResponse({ status: 404, description: 'Cinema não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.cinemaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar cinema' })
  @ApiResponse({ status: 200, description: 'Cinema atualizado.' })
  update(@Param('id') id: string, @Body() updateCinemaDto: UpdateCinemaDto) {
    return this.cinemaService.update(+id, updateCinemaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover cinema' })
  @ApiResponse({ status: 200, description: 'Cinema removido.' })
  remove(@Param('id') id: string) {
    return this.cinemaService.remove(+id);
  }
}
