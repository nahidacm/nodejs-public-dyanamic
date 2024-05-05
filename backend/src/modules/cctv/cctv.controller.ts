import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CctvService } from './cctv.service';
import { CreateCctvDto } from './dto/create-cctv.dto';
import { UpdateCctvDto } from './dto/update-cctv.dto';
import * as fs from 'fs';
import { Public } from '../auth/public.decorator';

@Controller('cctv')
export class CctvController {
  constructor(private readonly cctvService: CctvService) {}

  @Post()
  create(@Body() createCctvDto: CreateCctvDto) {
    return this.cctvService.create(createCctvDto);
  }

  @Public()
  @Get('video')
  async getVideo(@Res() res): Promise<void> {
    console.log('Stream Begins');
    const videoStream = fs.createReadStream(
      'rtsp://admin:nt889946@103.145.210.146:554/Streaming/channels/101',
    );
    videoStream.pipe(res);
  }

  @Get()
  findAll() {
    return this.cctvService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cctvService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCctvDto: UpdateCctvDto) {
    return this.cctvService.update(+id, updateCctvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cctvService.remove(+id);
  }
}
