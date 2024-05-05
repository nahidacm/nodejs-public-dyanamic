import { Module } from '@nestjs/common';
import { LaunchTrafficService } from './launch-traffic.service';
import { LaunchTrafficController } from './launch-traffic.controller';
import { PrismaService } from '@services/prisma.service';

@Module({
  controllers: [LaunchTrafficController],
  providers: [LaunchTrafficService, PrismaService],
})
export class LaunchTrafficModule {}
