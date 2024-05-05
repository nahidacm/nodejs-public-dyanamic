import { Injectable } from '@nestjs/common';
import { CreatePlanningFileDto } from './dto/create-planning-file.dto';
import { UpdatePlanningFileDto } from './dto/update-planning-file.dto';
import { PrismaService } from '@services/prisma.service';
@Injectable()
export class PlanningFilesService {
  constructor(private prisma: PrismaService) {}
  async create(createPlanningFileDto: CreatePlanningFileDto) {
    await this.prisma.file.create({
      data: { ...createPlanningFileDto, planId: +createPlanningFileDto.planId },
    });
    return 'This action adds a new planningFile';
  }

  findAll(params: string[]) {
    const planningFiles = this.prisma.file.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        file: true,
        planId: true,
      },
      skip: params['skip'],
      take: params['take'],
    });
    return planningFiles;
  }

  findOne(id: number) {
    return `This action returns a #${id} planningFile`;
  }

  update(id: number, updatePlanningFileDto: UpdatePlanningFileDto) {
    console.log(updatePlanningFileDto);
    return `This action updates a #${id} planningFile`;
  }

  async remove(id: number) {
    try {
      await this.prisma.file.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
