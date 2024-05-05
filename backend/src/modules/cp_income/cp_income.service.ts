import { Injectable } from '@nestjs/common';
import { CreateCpIncomeDto } from './dto/create-cp_income.dto';
import { UpdateCpIncomeDto } from './dto/update-cp_income.dto';
import { PrismaService } from '@services/prisma.service';

@Injectable()
export class CpIncomeService {
  constructor(private prisma: PrismaService) {}

  async create(createCpIncomeDto: CreateCpIncomeDto) {
    await this.prisma.c_p_income.create({
      data: createCpIncomeDto,
    });
    return 'This action adds a new cpIncome';
  }
  async findAll(params: string[]) {
    const cp_income = await this.prisma.c_p_income.findMany({
      select: {
        id: true,
        date: true,
        title: true,
        amount: true,
        detail: true,
      },
      skip: params['skip'],
      take: params['take'],
    });

    return cp_income;
  }

  findOne(id: number) {
    return `This action returns a #${id} cpIncome`;
  }

  update(id: number, updateCpIncomeDto: UpdateCpIncomeDto) {
    return `This action updates a #${id} cpIncome`;
  }

  async remove(id: number) {
    try {
      const deletedC_P_Income = await this.prisma.c_p_income.delete({
        where: {
          id: id,
        },
      });
      return deletedC_P_Income;
    } catch (error) {
      console.error(
        `Error deleting C_P_Income with ID ${id}: ${error.message}`,
      );
      throw error;
    }
  }
}
