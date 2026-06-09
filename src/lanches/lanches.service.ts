import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLanchDto } from './dto/create-lanch.dto';
import { UpdateLanchDto } from './dto/update-lanch.dto';

@Injectable()
export class LanchesService {
  constructor(private prisma: PrismaService) {}

  create(createLanchDto: CreateLanchDto) {
    return this.prisma.lancheCombo.create({ data: createLanchDto });
  }

  findAll() {
    return this.prisma.lancheCombo.findMany();
  }

  findOne(id: number) {
    return this.prisma.lancheCombo.findUnique({ where: { id } });
  }

  update(id: number, updateLanchDto: UpdateLanchDto) {
    return this.prisma.lancheCombo.update({ where: { id }, data: updateLanchDto });
  }

  remove(id: number) {
    return this.prisma.lancheCombo.delete({ where: { id } });
  }
}
