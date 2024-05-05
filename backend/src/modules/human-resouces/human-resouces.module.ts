import { Module } from '@nestjs/common';
import { HumanResoucesService } from './human-resouces.service';
import { HumanResoucesController } from './human-resouces.controller';
import { PrismaService } from '@services/prisma.service';

@Module({
  controllers: [HumanResoucesController],
  providers: [HumanResoucesService, PrismaService],
})
export class HumanResoucesModule {}
