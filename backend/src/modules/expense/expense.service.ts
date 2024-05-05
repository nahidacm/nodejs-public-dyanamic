import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { PrismaService } from '../../services/prisma.service';

@Injectable()
export class ExpenseService {
  constructor(private prisma: PrismaService) {}
  async create(createExpenseDto: CreateExpenseDto) {
    await this.prisma.expense.create({
      data: createExpenseDto,
    });
    return 'This action adds a new expense';
  }

  async findAll(params: string[]) {
    const expense = await this.prisma.expense.findMany({
      select: {
        id: true,
        date: true,
        type: true,
        amount: true,
        detail: true,
      },
      skip: params['skip'],
      take: params['take'],
    });

    return expense;
  }

  findOne(id: number) {
    return `This action returns a #${id} expense`;
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return `This action updates a #${id} expense`;
  }

  async remove(id: number) {
    try {
      const deletedExpense = await this.prisma.expense.delete({
        where: {
          id: id,
        },
      });
      return deletedExpense;
    } catch (error) {
      console.error(`Error deleting Expense with ID ${id}: ${error.message}`);
      throw error;
    }
  }
}
