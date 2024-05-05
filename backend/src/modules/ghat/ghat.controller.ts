import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GhatService } from './ghat.service';
import { CreateGhatDto } from './dto/create-ghat.dto';
import { UpdateGhatDto } from './dto/update-ghat.dto';

@Controller('ghat')
export class GhatController {
  constructor(private readonly ghatService: GhatService) {}

  @Post()
  create(@Body() createGhatDto: CreateGhatDto) {
    return this.ghatService.create(createGhatDto);
  }

  @Get()
  findAll(@Param() params: string[]) {
    return this.ghatService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ghatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGhatDto: UpdateGhatDto) {
    return this.ghatService.update(+id, updateGhatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ghatService.remove(+id);
  }
}
