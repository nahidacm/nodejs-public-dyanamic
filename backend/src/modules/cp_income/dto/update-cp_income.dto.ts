import { PartialType } from '@nestjs/mapped-types';
import { CreateCpIncomeDto } from './create-cp_income.dto';

export class UpdateCpIncomeDto extends PartialType(CreateCpIncomeDto) {}
