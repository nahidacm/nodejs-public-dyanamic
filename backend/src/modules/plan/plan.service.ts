import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { PrismaService } from '@services/prisma.service';
@Injectable()
export class PlanService {
  constructor(private prisma: PrismaService) {}
  async create(createPlanDto: CreatePlanDto) {
    await this.prisma.plan.create({
      data: {
        ...createPlanDto,
      },
    });
    return 'This action adds a new plan';
  }

  findAll(params: string[]) {
    const plan = this.prisma.plan.findMany({
      select: {
        id: true,
        title: true,
        description: true,
      },
      skip: params['skip'],
      take: params['take'],
    });
    return plan;
  }

  findOne(id: number) {
    return `This action returns a #${id} plan`;
  }

  update(id: number, updatePlanDto: UpdatePlanDto) {
    console.log(updatePlanDto);
    return `This action updates a #${id} plan`;
  }

  async remove(id: number) {
    try {
      const plan = await this.prisma.plan.delete({
        where: {
          id: id,
        },
      });
      return plan;
    } catch (error) {
      console.error(`Error deleting Plan with ID ${id}: ${error.message}`);
      throw error;
    }
  }
}
