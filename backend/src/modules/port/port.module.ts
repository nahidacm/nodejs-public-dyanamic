import { Module } from '@nestjs/common';
import { PortService } from './port.service';
import { PortController } from './port.controller';
import { PrismaService } from '@services/prisma.service';

@Module({
  controllers: [PortController],
  providers: [PortService, PrismaService],
})
export class PortModule {}
