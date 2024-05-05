import { Injectable } from '@nestjs/common';
import { CreateLaunchScheduleDto } from './dto/create-launch-schedule.dto';
import { UpdateLaunchScheduleDto } from './dto/update-launch-schedule.dto';
import { PrismaService } from '@services/prisma.service';

@Injectable()
export class LaunchScheduleService {
  constructor(private prisma: PrismaService) {}
  async create(createLaunchScheduleDto: CreateLaunchScheduleDto) {
    await this.prisma.launch_schedule.create({
      data: createLaunchScheduleDto,
    });
    return 'This action adds a new launchSchedule';
  }

  async findAll(params: string[]) {
    const launch_schedule = await this.prisma.launch_schedule.findMany({
      select: {
        id: true,
        time: true,
        from_ghat: true,
        to_ghat: true,
        launch_name: true,
        launch_number: true,
      },
      skip: params['skip'],
      take: params['take'],
    });

    return launch_schedule;
  }

  findOne(id: number) {
    return `This action returns a #${id} launchSchedule`;
  }

  update(id: number, updateLaunchScheduleDto: UpdateLaunchScheduleDto) {
    return `This action updates a #${id} launchSchedule`;
  }

  async remove(id: number) {
    try {
      const deleted_launch_schedule = await this.prisma.launch_schedule.delete({
        where: {
          id: id,
        },
      });
      return deleted_launch_schedule;
    } catch (error) {
      console.error(
        `Error deleting Launch Schedule with ID ${id}: ${error.message}`,
      );
      throw error;
    }
  }
}
