import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLanchDto } from './dto/create-lanch.dto';
import { UpdateLanchDto } from './dto/update-lanch.dto';

@Injectable()
export class LanchesService {
  constructor(private prisma: PrismaService) {}

  async create(createLanchDto: CreateLanchDto) {
    try {
      return await this.prisma.lancheCombo.create({ data: createLanchDto });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2003') {
        throw new NotFoundException(`Pedido com id ${createLanchDto.pedidoId} não encontrado`);
      }
      throw new InternalServerErrorException(e instanceof Error ? e.message : String(e));
    }
  }

  findAll() {
    return this.prisma.lancheCombo.findMany();
  }

  async findOne(id: number) {
    const lanche = await this.prisma.lancheCombo.findUnique({ where: { id } });
    if (!lanche) throw new NotFoundException(`Lanche #${id} não encontrado`);
    return lanche;
  }

  update(id: number, updateLanchDto: UpdateLanchDto) {
    return this.prisma.lancheCombo.update({ where: { id }, data: updateLanchDto });
  }

  remove(id: number) {
    return this.prisma.lancheCombo.delete({ where: { id } });
  }
}
