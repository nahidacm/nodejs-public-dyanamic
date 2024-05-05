import { Module } from '@nestjs/common';
import { MarineCourteService } from './marine-courte.service';
import { MarineCourteController } from './marine-courte.controller';
import { PrismaService } from '@services/prisma.service';

@Module({
  controllers: [MarineCourteController],
  providers: [MarineCourteService, PrismaService],
})
export class MarineCourteModule {}
