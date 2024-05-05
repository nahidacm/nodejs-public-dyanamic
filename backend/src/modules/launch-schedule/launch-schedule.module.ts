import { Module } from '@nestjs/common';
import { LaunchScheduleService } from './launch-schedule.service';
import { LaunchScheduleController } from './launch-schedule.controller';
import { PrismaService } from '@services/prisma.service';
@Module({
  controllers: [LaunchScheduleController],
  providers: [LaunchScheduleService, PrismaService],
})
export class LaunchScheduleModule {}
