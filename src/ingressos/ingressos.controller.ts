import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IngressosService } from './ingressos.service';
import { CreateIngressoDto } from './dto/create-ingresso.dto';
import { UpdateIngressoDto } from './dto/update-ingresso.dto';

@ApiTags('ingressos')
@Controller('ingressos')
export class IngressosController {
  constructor(private readonly ingressosService: IngressosService) {}

  @Post()
  @ApiOperation({ summary: 'Criar ingresso' })
  @ApiResponse({ status: 201, description: 'Ingresso criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createIngressoDto: CreateIngressoDto) {
    return this.ingressosService.create(createIngressoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os ingressos' })
  @ApiResponse({ status: 200, description: 'Lista de ingressos.' })
  findAll() {
    return this.ingressosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar ingresso por ID' })
  @ApiResponse({ status: 200, description: 'Ingresso encontrado.' })
  @ApiResponse({ status: 404, description: 'Ingresso não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.ingressosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar ingresso' })
  @ApiResponse({ status: 200, description: 'Ingresso atualizado.' })
  update(@Param('id') id: string, @Body() updateIngressoDto: UpdateIngressoDto) {
    return this.ingressosService.update(+id, updateIngressoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover ingresso' })
  @ApiResponse({ status: 200, description: 'Ingresso removido.' })
  remove(@Param('id') id: string) {
    return this.ingressosService.remove(+id);
  }
}
