import { Injectable } from '@nestjs/common';
import { CreateIncomeDto } from './dto/create-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';
import { PrismaService } from '../../services/prisma.service';
@Injectable()
export class IncomeService {
  constructor(private prisma: PrismaService) {}
  async create(createIncomeDto: CreateIncomeDto) {
    await this.prisma.ticket_income.create({
      data: createIncomeDto,
    });
    return 'This action adds a new income';
  }

  async findAll(params: string[]) {
    const incomes = await this.prisma.ticket_income.findMany({
      select: {
        id: true,
        date: true,
        source: true,
        amount: true,
        ghat: true,
        detail: true,
      },
      skip: params['skip'],
      take: params['take'],
    });

    return incomes;
  }

  findOne(id: number) {
    return `This action returns a #${id} income`;
  }

  update(id: number, updateIncomeDto: UpdateIncomeDto) {
    return `This action updates a #${id} income`;
  }

  async remove(id: number) {
    try {
      const deletedIncome = await this.prisma.ticket_income.delete({
        where: {
          id: id,
        },
      });
      return deletedIncome;
    } catch (error) {
      console.error(`Error deleting Income with ID ${id}: ${error.message}`);
      throw error;
    }
  }
}
