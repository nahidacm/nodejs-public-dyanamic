import { Module } from '@nestjs/common';
import { PlanningImagesService } from './planning-images.service';
import { PlanningImagesController } from './planning-images.controller';
import { PrismaService } from '@services/prisma.service';
@Module({
  controllers: [PlanningImagesController],
  providers: [PlanningImagesService, PrismaService],
})
export class PlanningImagesModule {}
