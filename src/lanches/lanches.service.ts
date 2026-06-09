import { Injectable } from '@nestjs/common';
import { CreateLanchDto } from './dto/create-lanch.dto';
import { UpdateLanchDto } from './dto/update-lanch.dto';

@Injectable()
export class LanchesService {
  create(createLanchDto: CreateLanchDto) {
    return 'Ação: adicionar um novo lanche/combo';
  }

  findAll() {
    return 'Ação: retornar todos os lanches';
  }

  findOne(id: number) {
    return `Ação: retornar o lanche #${id}`;
  }

  update(id: number, updateLanchDto: UpdateLanchDto) {
    return `Ação: atualizar o lanche #${id}`;
  }

  remove(id: number) {
    return `Ação: remover o lanche #${id}`;
  }
}
