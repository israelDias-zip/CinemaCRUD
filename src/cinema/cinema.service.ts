import { Injectable } from '@nestjs/common';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';

@Injectable()
export class CinemaService {
  create(createCinemaDto: CreateCinemaDto) {
    return 'Ação: adicionar um novo cinema';
  }

  findAll() {
    return 'Ação: retornar todos os cinemas';
  }

  findOne(id: number) {
    return `Ação: retornar o cinema #${id}`;
  }

  update(id: number, updateCinemaDto: UpdateCinemaDto) {
    return `Ação: atualizar o cinema #${id}`;
  }

  remove(id: number) {
    return `Ação: remover o cinema #${id}`;
  }
}
