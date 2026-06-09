import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidosService {
  create(createPedidoDto: CreatePedidoDto) {
    return 'Ação: adicionar um novo pedido';
  }

  findAll() {
    return 'Ação: retornar todos os pedidos';
  }

  findOne(id: number) {
    return `Ação: retornar o pedido #${id}`;
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `Ação: atualizar o pedido #${id}`;
  }

  remove(id: number) {
    return `Ação: remover o pedido #${id}`;
  }
}
