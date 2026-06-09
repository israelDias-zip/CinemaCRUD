import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SessoesService } from './sessoes.service';
import { CreateSessoeDto } from './dto/create-sessoe.dto';
import { UpdateSessoeDto } from './dto/update-sessoe.dto';

@ApiTags('sessoes')
@Controller('sessoes')
export class SessoesController {
  constructor(private readonly sessoesService: SessoesService) {}

  @Post()
  @ApiOperation({ summary: 'Criar sessão' })
  @ApiResponse({ status: 201, description: 'Sessão criada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createSessoeDto: CreateSessoeDto) {
    return this.sessoesService.create(createSessoeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as sessões' })
  @ApiResponse({ status: 200, description: 'Lista de sessões.' })
  findAll() {
    return this.sessoesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar sessão por ID' })
  @ApiResponse({ status: 200, description: 'Sessão encontrada.' })
  @ApiResponse({ status: 404, description: 'Sessão não encontrada.' })
  findOne(@Param('id') id: string) {
    return this.sessoesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar sessão' })
  @ApiResponse({ status: 200, description: 'Sessão atualizada.' })
  update(@Param('id') id: string, @Body() updateSessoeDto: UpdateSessoeDto) {
    return this.sessoesService.update(+id, updateSessoeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover sessão' })
  @ApiResponse({ status: 200, description: 'Sessão removida.' })
  remove(@Param('id') id: string) {
    return this.sessoesService.remove(+id);
  }
}
