import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HumanResoucesService } from './human-resouces.service';
import { CreateHumanResouceDto } from './dto/create-human-resouce.dto';
import { UpdateHumanResouceDto } from './dto/update-human-resouce.dto';

@Controller('human-resouces')
export class HumanResoucesController {
  constructor(private readonly humanResoucesService: HumanResoucesService) {}

  @Post()
  create(@Body() createHumanResouceDto: CreateHumanResouceDto) {
    return this.humanResoucesService.create(createHumanResouceDto);
  }

  @Get()
  findAll(@Param() params: string[]) {
    return this.humanResoucesService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.humanResoucesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHumanResouceDto: UpdateHumanResouceDto,
  ) {
    return this.humanResoucesService.update(+id, updateHumanResouceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.humanResoucesService.remove(+id);
  }
}
