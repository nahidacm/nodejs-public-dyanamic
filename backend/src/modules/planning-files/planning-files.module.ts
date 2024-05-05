import { Module } from '@nestjs/common';
import { PlanningFilesService } from './planning-files.service';
import { PlanningFilesController } from './planning-files.controller';
import { PrismaService } from '@services/prisma.service';
@Module({
  controllers: [PlanningFilesController],
  providers: [PlanningFilesService, PrismaService],
})
export class PlanningFilesModule {}
