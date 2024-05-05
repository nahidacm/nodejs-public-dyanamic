import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PassengerTrafficService } from './passenger-traffic.service';
import { CreatePassengerTrafficDto } from './dto/create-passenger-traffic.dto';
import { UpdatePassengerTrafficDto } from './dto/update-passenger-traffic.dto';

@Controller('passenger-traffic')
export class PassengerTrafficController {
  constructor(
    private readonly passengerTrafficService: PassengerTrafficService,
  ) {}

  @Post()
  create(@Body() createPassengerTrafficDto: CreatePassengerTrafficDto) {
    return this.passengerTrafficService.create(createPassengerTrafficDto);
  }

  @Get()
  findAll(@Param() params: string[]) {
    return this.passengerTrafficService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passengerTrafficService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePassengerTrafficDto: UpdatePassengerTrafficDto,
  ) {
    return this.passengerTrafficService.update(+id, updatePassengerTrafficDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passengerTrafficService.remove(+id);
  }
}
