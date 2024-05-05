import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LaunchTrafficService } from './launch-traffic.service';
import { CreateLaunchTrafficDto } from './dto/create-launch-traffic.dto';
import { UpdateLaunchTrafficDto } from './dto/update-launch-traffic.dto';

@Controller('launch-traffic')
export class LaunchTrafficController {
  constructor(private readonly launchTrafficService: LaunchTrafficService) {}

  @Post()
  create(@Body() createLaunchTrafficDto: CreateLaunchTrafficDto) {
    return this.launchTrafficService.create(createLaunchTrafficDto);
  }

  @Get()
  findAll(@Param() params: string[]) {
    return this.launchTrafficService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.launchTrafficService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLaunchTrafficDto: UpdateLaunchTrafficDto,
  ) {
    return this.launchTrafficService.update(+id, updateLaunchTrafficDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.launchTrafficService.remove(+id);
  }
}
