import { Injectable } from '@nestjs/common';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';

@Injectable()
export class SalasService {
  create(createSalaDto: CreateSalaDto) {
    return 'Ação: adicionar uma nova sala';
  }

  findAll() {
    return 'Ação: retornar todas as salas';
  }

  findOne(id: number) {
    return `Ação: retornar a sala #${id}`;
  }

  update(id: number, updateSalaDto: UpdateSalaDto) {
    return `Ação: atualizar a sala #${id}`;
  }

  remove(id: number) {
    return `Ação: remover a sala #${id}`;
  }
}
