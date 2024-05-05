import { Module } from '@nestjs/common';
import { CpIncomeService } from './cp_income.service';
import { CpIncomeController } from './cp_income.controller';
import { PrismaService } from '@services/prisma.service';

@Module({
  controllers: [CpIncomeController],
  providers: [CpIncomeService, PrismaService],
})
export class CpIncomeModule {}
