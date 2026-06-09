import { Injectable } from '@nestjs/common';
import { CreateSessoeDto } from './dto/create-sessoe.dto';
import { UpdateSessoeDto } from './dto/update-sessoe.dto';

@Injectable()
export class SessoesService {
  create(createSessoeDto: CreateSessoeDto) {
    return 'Ação: adicionar uma nova sessão';
  }

  findAll() {
    return 'Ação: retornar todas as sessões';
  }

  findOne(id: number) {
    return `Ação: retornar a sessão #${id}`;
  }

  update(id: number, updateSessoeDto: UpdateSessoeDto) {
    return `Ação: atualizar a sessão #${id}`;
  }

  remove(id: number) {
    return `Ação: remover a sessão #${id}`;
  }
}
