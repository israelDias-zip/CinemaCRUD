import { Injectable } from '@nestjs/common';
import { CreateIngressoDto } from './dto/create-ingresso.dto';
import { UpdateIngressoDto } from './dto/update-ingresso.dto';

@Injectable()
export class IngressosService {
  create(createIngressoDto: CreateIngressoDto) {
    return 'Ação: adicionar um novo ingresso';
  }

  findAll() {
    return 'Ação: retornar todos os ingressos';
  }

  findOne(id: number) {
    return `Ação: retornar o ingresso #${id}`;
  }

  update(id: number, updateIngressoDto: UpdateIngressoDto) {
    return `Ação: atualizar o ingresso #${id}`;
  }

  remove(id: number) {
    return `Ação: remover o ingresso #${id}`;
  }
}
