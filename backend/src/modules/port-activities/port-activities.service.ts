import { Injectable } from '@nestjs/common';
import { CreatePortActivityDto } from './dto/create-port-activity.dto';
import { UpdatePortActivityDto } from './dto/update-port-activity.dto';
import { PrismaService } from '@services/prisma.service';
@Injectable()
export class PortActivitiesService {
  constructor(private prisma: PrismaService) {}
  async create(createPortActivityDto: CreatePortActivityDto) {
    await this.prisma.port_activities.create({
      data: createPortActivityDto,
    });
    return 'This action adds a new portActivity';
  }
  findAll(params: string[]) {
    const activities = this.prisma.port_activities.findMany({
      select: {
        id: true,
        date: true,
        title: true,
        description: true,
      },
      skip: params['skip'],
      take: params['take'],
    });
    return activities;
  }

  findOne(id: number) {
    return `This action returns a #${id} portActivity`;
  }

  update(id: number, updatePortActivityDto: UpdatePortActivityDto) {
    console.log(updatePortActivityDto);
    return `This action updates a #${id} portActivity`;
  }

  async remove(id: number) {
    try {
      const activities = await this.prisma.port_activities.delete({
        where: {
          id: id,
        },
      });
      return activities;
    } catch (error) {
      console.error(
        `Error deleting PortActivities with ID ${id}: ${error.message}`,
      );
      throw error;
    }
  }
}
