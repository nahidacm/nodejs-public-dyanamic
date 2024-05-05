import { Injectable } from '@nestjs/common';
import { CreateLaunchTrafficDto } from './dto/create-launch-traffic.dto';
import { UpdateLaunchTrafficDto } from './dto/update-launch-traffic.dto';
import { PrismaService } from '@services/prisma.service';
@Injectable()
export class LaunchTrafficService {
  constructor(private prisma: PrismaService) {}
  async create(createLaunchTrafficDto: CreateLaunchTrafficDto) {
    await this.prisma.launch_traffic.create({
      data: createLaunchTrafficDto,
    });
    return 'This action adds a new launchTraffic';
  }

  async findAll(params: string[]) {
    const launch_traffic = await this.prisma.launch_traffic.findMany({
      select: {
        id: true,
        date: true,
        ghat: true,
        count: true,
      },
      skip: params['skip'],
      take: params['take'],
    });

    return launch_traffic;
  }

  findOne(id: number) {
    return `This action returns a #${id} launchTraffic`;
  }

  update(id: number, updateLaunchTrafficDto: UpdateLaunchTrafficDto) {
    return `This action updates a #${id} launchTraffic`;
  }

  async remove(id: number) {
    try {
      const deleted_launch_Traffic = await this.prisma.launch_traffic.delete({
        where: {
          id: id,
        },
      });
      return deleted_launch_Traffic;
    } catch (error) {
      console.error(
        `Error deleting Launch traffic with ID ${id}: ${error.message}`,
      );
      throw error;
    }
  }
}
