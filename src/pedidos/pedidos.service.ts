import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidosService {
  constructor(private prisma: PrismaService) {}

  create(createPedidoDto: CreatePedidoDto) {
    const { ingressoIds, ...data } = createPedidoDto;
    return this.prisma.pedido.create({
      data: {
        ...data,
        ingressos: {
          connect: ingressoIds.map((id) => ({ id })),
        },
      },
    });
  }

  findAll() {
    return this.prisma.pedido.findMany();
  }

  findOne(id: number) {
    return this.prisma.pedido.findUnique({ where: { id } });
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    const { ingressoIds, ...data } = updatePedidoDto;
    return this.prisma.pedido.update({
      where: { id },
      data: {
        ...data,
        ...(ingressoIds && {
          ingressos: { set: ingressoIds.map((id) => ({ id })) },
        }),
      },
    });
  }

  remove(id: number) {
    return this.prisma.pedido.delete({ where: { id } });
  }
}
