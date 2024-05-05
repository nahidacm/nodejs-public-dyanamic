import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PortActivitiesService } from './port-activities.service';
import { CreatePortActivityDto } from './dto/create-port-activity.dto';
import { UpdatePortActivityDto } from './dto/update-port-activity.dto';

@Controller('port-activities')
export class PortActivitiesController {
  constructor(private readonly portActivitiesService: PortActivitiesService) {}

  @Post()
  create(@Body() createPortActivityDto: CreatePortActivityDto) {
    return this.portActivitiesService.create(createPortActivityDto);
  }

  @Get()
  findAll(@Param() params: string[]) {
    return this.portActivitiesService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.portActivitiesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePortActivityDto: UpdatePortActivityDto,
  ) {
    return this.portActivitiesService.update(+id, updatePortActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.portActivitiesService.remove(+id);
  }
}
