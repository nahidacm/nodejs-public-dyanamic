import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MarineCourteService } from './marine-courte.service';
import { CreateMarineCourteDto } from './dto/create-marine-courte.dto';
import { UpdateMarineCourteDto } from './dto/update-marine-courte.dto';

@Controller('marine-courte')
export class MarineCourteController {
  constructor(private readonly marineCourteService: MarineCourteService) {}

  @Post()
  create(@Body() createMarineCourteDto: CreateMarineCourteDto) {
    return this.marineCourteService.create(createMarineCourteDto);
  }

  @Get()
  findAll(@Param() params: string[]) {
    return this.marineCourteService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marineCourteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMarineCourteDto: UpdateMarineCourteDto,
  ) {
    return this.marineCourteService.update(+id, updateMarineCourteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marineCourteService.remove(+id);
  }
}
