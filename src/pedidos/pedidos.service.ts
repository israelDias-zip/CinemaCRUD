import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidosService {
  constructor(private prisma: PrismaService) {}

  async create(createPedidoDto: CreatePedidoDto) {
    const { ingressoIds, ...data } = createPedidoDto;
    try {
      return await this.prisma.pedido.create({
        data: {
          ...data,
          ingressos: {
            connect: ingressoIds.map((id) => ({ id })),
          },
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025') {
        throw new NotFoundException(`Um ou mais ingressos informados não foram encontrados`);
      }
      throw new InternalServerErrorException(e instanceof Error ? e.message : String(e));
    }
  }

  findAll() {
    return this.prisma.pedido.findMany();
  }

  async findOne(id: number) {
    const pedido = await this.prisma.pedido.findUnique({ where: { id } });
    if (!pedido) throw new NotFoundException(`Pedido #${id} não encontrado`);
    return pedido;
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
