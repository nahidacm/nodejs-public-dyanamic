import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LaunchScheduleService } from './launch-schedule.service';
import { CreateLaunchScheduleDto } from './dto/create-launch-schedule.dto';
import { UpdateLaunchScheduleDto } from './dto/update-launch-schedule.dto';

@Controller('launch-schedule')
export class LaunchScheduleController {
  constructor(private readonly launchScheduleService: LaunchScheduleService) {}

  @Post('/create')
  create(@Body() createLaunchScheduleDto: CreateLaunchScheduleDto) {
    return this.launchScheduleService.create(createLaunchScheduleDto);
  }

  @Get('list')
  findAll(@Param() params: string[]) {
    return this.launchScheduleService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.launchScheduleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLaunchScheduleDto: UpdateLaunchScheduleDto,
  ) {
    return this.launchScheduleService.update(+id, updateLaunchScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.launchScheduleService.remove(+id);
  }
}
