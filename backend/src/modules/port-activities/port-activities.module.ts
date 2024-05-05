import { Module } from '@nestjs/common';
import { PortActivitiesService } from './port-activities.service';
import { PortActivitiesController } from './port-activities.controller';
import { PrismaService } from '@services/prisma.service';

@Module({
  controllers: [PortActivitiesController],
  providers: [PortActivitiesService, PrismaService],
})
export class PortActivitiesModule {}
