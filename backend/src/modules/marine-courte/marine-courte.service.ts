import { Injectable } from '@nestjs/common';
import { CreateMarineCourteDto } from './dto/create-marine-courte.dto';
import { UpdateMarineCourteDto } from './dto/update-marine-courte.dto';
import { PrismaService } from '@services/prisma.service';
@Injectable()
export class MarineCourteService {
  constructor(private prisma: PrismaService) {}
  async create(createMarineCourteDto: CreateMarineCourteDto) {
    await this.prisma.marine_courte_cases.create({
      data: createMarineCourteDto,
    });
    return 'This action adds a new marineCourte';
  }

  findAll(params: string[]) {
    const marineCourte = this.prisma.marine_courte_cases.findMany({
      select: {
        id: true,
        date: true,
        number: true,
        detail: true,
        status: true,
      },
      skip: params['skip'],
      take: params['take'],
    });
    return marineCourte;
  }

  findOne(id: number) {
    return `This action returns a #${id} marineCourte`;
  }

  update(id: number, updateMarineCourteDto: UpdateMarineCourteDto) {
    console.log(updateMarineCourteDto);
    return `This action updates a #${id} marineCourte`;
  }

  async remove(id: number) {
    try {
      const marineCourte = await this.prisma.marine_courte_cases.delete({
        where: {
          id: id,
        },
      });
      return marineCourte;
    } catch (error) {
      console.error(
        `Error deleting MarineCourte with ID ${id}: ${error.message}`,
      );
      throw error;
    }
  }
}
