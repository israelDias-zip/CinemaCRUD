import { Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Injectable()
export class FilmesService {
  create(createFilmeDto: CreateFilmeDto) {
    return 'Ação: adicionar um novo filme';
  }

  findAll() {
    return 'Ação: retornar todos os filmes';
  }

  findOne(id: number) {
    return `Ação: retornar o filme #${id}`;
  }

  update(id: number, updateFilmeDto: UpdateFilmeDto) {
    return `Ação: atualizar o filme #${id}`;
  }

  remove(id: number) {
    return `Ação: remover o filme #${id}`;
  }
}
