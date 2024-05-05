import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { diskStorage } from 'multer';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';

export const editFileName = async (req, file, callback) => {
  console.log('passed to editor');
  const fileExtName = extname(file.originalname);
  const fileName = new Date().getTime() + '-' + uuidv4() + fileExtName;
  callback(null, `${fileName}`);
};

//File Validation
export const fileFilter = async (req, file, callback) => {
  if (!file.originalname.toLowerCase().match(/\.(mp4)$/)) {
    return callback(
      new BadRequestException(
        'Invalid video format, Only video file is allowed ',
      ),
      false,
    );
  }
  callback(null, true);
};
@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'files/videos',
        filename: editFileName,
      }),
      fileFilter: fileFilter,
      limits: {
        files: 1, // allow up to sd1 files per request,
        fieldSize: Number(process.env.FILE_MAX_SIZE || 2000),
      },
    }),
  )
  async uploadFile(
    @UploadedFile('file') file: Express.Multer.File,
    @Body() createVideoDto: CreateVideoDto,
  ) {
    if (!file) {
      throw new BadRequestException('File not found');
    }
    const videoUrl = `/files/videos/${file.filename}`;
    const createDtoWithVideoUrl = {
      ...createVideoDto,
      video: videoUrl,
    };
    console.log(createDtoWithVideoUrl);
    try {
      const response = await this.videoService.create(createDtoWithVideoUrl);
      return response;
    } catch (error) {
      throw error;
    }
  }
  @Get()
  findAll(@Param() params: string[]) {
    return this.videoService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideoDto: UpdateVideoDto) {
    return this.videoService.update(+id, updateVideoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videoService.remove(+id);
  }
}
