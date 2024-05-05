import { Injectable } from '@nestjs/common';
import { CreatePlanningImageDto } from './dto/create-planning-image.dto';
import { UpdatePlanningImageDto } from './dto/update-planning-image.dto';
import { PrismaService } from '@services/prisma.service';
@Injectable()
export class PlanningImagesService {
  constructor(private prisma: PrismaService) {}
  async create(createPlanningImageDto: CreatePlanningImageDto) {
    await this.prisma.image.create({
      data: {
        ...createPlanningImageDto,
        planId: +createPlanningImageDto.planId,
      },
    });
    return 'This action adds a new planningImage';
  }

  findAll(params: string[]) {
    const planningImage = this.prisma.image.findMany({
      select: {
        id: true,
        image: true,
        title: true,
        description: true,
      },
      skip: params['skip'],
      take: params['take'],
    });
    return planningImage;
  }

  findOne(id: number) {
    return `This action returns a #${id} planningImage`;
  }

  update(id: number, updatePlanningImageDto: UpdatePlanningImageDto) {
    return `This action updates a #${id} planningImage`;
  }

  async remove(id: number) {
    try {
      const planningImage = await this.prisma.image.delete({
        where: {
          id: id,
        },
      });
      return planningImage;
    } catch (error) {
      console.error(
        `Error deleting PlanningImage with ID ${id}: ${error.message}`,
      );
      throw error;
    }
  }
}
