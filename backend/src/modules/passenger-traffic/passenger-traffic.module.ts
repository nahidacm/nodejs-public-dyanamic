import { Module } from '@nestjs/common';
import { PassengerTrafficService } from './passenger-traffic.service';
import { PassengerTrafficController } from './passenger-traffic.controller';
import { PrismaService } from '@services/prisma.service';

@Module({
  controllers: [PassengerTrafficController],
  providers: [PassengerTrafficService, PrismaService],
})
export class PassengerTrafficModule {}
