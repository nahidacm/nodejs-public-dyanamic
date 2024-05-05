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
import { VesselService } from './vessel.service';
import { CreateVesselDto } from './dto/create-vessel.dto';
import { UpdateVesselDto } from './dto/update-vessel.dto';

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
@Controller('vessel')
export class VesselController {
  constructor(private readonly vesselService: VesselService) {}

  @Post('/create')
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
    @Body() createVesselDto: CreateVesselDto,
  ) {
    if (!file) {
      throw new BadRequestException('File not found');
    }
    const imageUrl = `/files/images/${file.filename}`;
    const createDtoWithImageUrl = {
      ...createVesselDto,
      photo: imageUrl,
    };
    console.log(createDtoWithImageUrl);
    try {
      const response = await this.vesselService.create(createDtoWithImageUrl);
      return response;
    } catch (error) {
      throw error;
    }
  }

  @Get('/vessels')
  findAll(@Param() params: string[]) {
    return this.vesselService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vesselService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVesselDto: UpdateVesselDto) {
    return this.vesselService.update(+id, updateVesselDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vesselService.remove(+id);
  }
}
