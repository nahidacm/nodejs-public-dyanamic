import {
  Controller,
  Get,
  Body,
  Post,
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
import { PhotoService } from './photo.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';

//Creat a unique file name
export const editFileName = async (req, file, callback) => {
  console.log('passed to editor');
  const fileExtName = extname(file.originalname);
  const fileName = new Date().getTime() + '-' + uuidv4() + fileExtName;
  callback(null, `${fileName}`);
};

//File Validation
export const fileFilter = async (req, file, callback) => {
  if (!file.originalname.toLowerCase().match(/\.(jpg|jpeg|png)$/)) {
    return callback(
      new BadRequestException(
        'Invalid image format, Only image file is allowed ',
      ),
      false,
    );
  }
  callback(null, true);
};
@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'files/images',
        filename: editFileName,
      }),
      fileFilter: fileFilter,
      limits: {
        files: 1, // allow up to sd1 files per request,
        fieldSize: Number(process.env.FILE_MAX_SIZE || 100),
      },
    }),
  )
  async uploadFile(
    @UploadedFile('file') file: Express.Multer.File,
    @Body() createPhotoDto: CreatePhotoDto,
  ) {
    if (!file) {
      throw new BadRequestException('File not found');
    }
    const imageUrl = `/files/images/${file.filename}`;
    const createDtoWithImageUrl = {
      ...createPhotoDto,
      photo: imageUrl,
    };
    console.log(createDtoWithImageUrl);
    try {
      const response = await this.photoService.create(createDtoWithImageUrl);
      return response;
    } catch (error) {
      throw error;
    }
  }

  @Get()
  findAll(@Param() params: string[]) {
    return this.photoService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.photoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhotoDto: UpdatePhotoDto) {
    return this.photoService.update(+id, updatePhotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photoService.remove(+id);
  }
}
