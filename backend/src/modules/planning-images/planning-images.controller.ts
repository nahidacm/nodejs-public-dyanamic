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
import { PlanningImagesService } from './planning-images.service';
import { CreatePlanningImageDto } from './dto/create-planning-image.dto';
import { UpdatePlanningImageDto } from './dto/update-planning-image.dto';

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
@Controller('planning-images')
export class PlanningImagesController {
  constructor(private readonly planningImagesService: PlanningImagesService) {}

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
    @Body() createPlanningImageDto: CreatePlanningImageDto,
  ) {
    if (!file) {
      throw new BadRequestException('File not found');
    }
    // console.log(createPlanningImageDto);
    const imageUrl = `/files/images/${file.filename}`;
    const createDtoWithImageUrl = {
      ...createPlanningImageDto,
      image: imageUrl,
    };
    // console.log(createDtoWithImageUrl);
    try {
      const response = await this.planningImagesService.create(
        createDtoWithImageUrl,
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  @Get()
  findAll(@Param() params: string[]) {
    return this.planningImagesService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planningImagesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlanningImageDto: UpdatePlanningImageDto,
  ) {
    return this.planningImagesService.update(+id, updatePlanningImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planningImagesService.remove(+id);
  }
}
