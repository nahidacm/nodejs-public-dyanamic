import { Injectable } from '@nestjs/common';
import { CreateCctvDto } from './dto/create-cctv.dto';
import { UpdateCctvDto } from './dto/update-cctv.dto';
import { PrismaService } from '@services/prisma.service';

@Injectable()
export class CctvService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCctvDto: CreateCctvDto) {
    return this.prisma.cctv.create({ data: createCctvDto });
  }

  findAll() {
    return this.prisma.cctv.findMany();
  }

  findOne(id: number) {
    return this.prisma.cctv.findUnique({ where: { id } });
  }

  update(id: number, updateCctvDto: UpdateCctvDto) {
    return this.prisma.cctv.update({ where: { id }, data: updateCctvDto });
  }

  remove(id: number) {
    return `This action removes a #${id} cctv`;
  }
}
