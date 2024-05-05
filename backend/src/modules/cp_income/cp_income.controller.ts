import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CpIncomeService } from './cp_income.service';
import { CreateCpIncomeDto } from './dto/create-cp_income.dto';
import { UpdateCpIncomeDto } from './dto/update-cp_income.dto';

@Controller('cp-income')
export class CpIncomeController {
  constructor(private readonly cpIncomeService: CpIncomeService) {}

  @Post()
  create(@Body() createCpIncomeDto: CreateCpIncomeDto) {
    return this.cpIncomeService.create(createCpIncomeDto);
  }
  @Get()
  findAll(@Param() params: string[]) {
    return this.cpIncomeService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cpIncomeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCpIncomeDto: UpdateCpIncomeDto,
  ) {
    return this.cpIncomeService.update(+id, updateCpIncomeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cpIncomeService.remove(+id);
  }
}
