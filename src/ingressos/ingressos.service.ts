import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateIngressoDto } from './dto/create-ingresso.dto';
import { UpdateIngressoDto } from './dto/update-ingresso.dto';

@Injectable()
export class IngressosService {
  constructor(private prisma: PrismaService) {}

  async create(createIngressoDto: CreateIngressoDto) {
    try {
      return await this.prisma.ingresso.create({ data: createIngressoDto });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2003') {
        throw new NotFoundException(`Sessão com id ${createIngressoDto.sessaoId} não encontrada`);
      }
      throw new InternalServerErrorException(e instanceof Error ? e.message : String(e));
    }
  }

  findAll() {
    return this.prisma.ingresso.findMany();
  }

  async findOne(id: number) {
    const ingresso = await this.prisma.ingresso.findUnique({ where: { id } });
    if (!ingresso) throw new NotFoundException(`Ingresso #${id} não encontrado`);
    return ingresso;
  }

  update(id: number, updateIngressoDto: UpdateIngressoDto) {
    return this.prisma.ingresso.update({ where: { id }, data: updateIngressoDto });
  }

  remove(id: number) {
    return this.prisma.ingresso.delete({ where: { id } });
  }
}
