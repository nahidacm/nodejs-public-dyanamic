import { Module } from '@nestjs/common';
import { VesselService } from './vessel.service';
import { VesselController } from './vessel.controller';
import { PrismaService } from '@services/prisma.service';

@Module({
  controllers: [VesselController],
  providers: [VesselService, PrismaService],
})
export class VesselModule {}
