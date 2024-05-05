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
import { PlanningFilesService } from './planning-files.service';
import { CreatePlanningFileDto } from './dto/create-planning-file.dto';
import { UpdatePlanningFileDto } from './dto/update-planning-file.dto';

//Creat a unique file name
export const editFileName = async (req, file, callback) => {
  console.log('passed to editor');
  const fileExtName = extname(file.originalname);
  const fileName = new Date().getTime() + '-' + uuidv4() + fileExtName;
  callback(null, `${fileName}`);
};

//File Validation
export const fileFilter = async (req, file, callback) => {
  if (!file.originalname.toLowerCase().match(/\.(pdf|doc|docx)$/)) {
    return callback(
      new BadRequestException(
        'Invalid image format, Only image file is allowed ',
      ),
      false,
    );
  }
  callback(null, true);
};
@Controller('planning-files')
export class PlanningFilesController {
  constructor(private readonly planningFilesService: PlanningFilesService) {}

  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'files/file',
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
    @Body() createPlanningFileDto: CreatePlanningFileDto,
  ) {
    if (!file) {
      throw new BadRequestException('File not found');
    }
    // console.log(createPlanningImageDto);
    const fileUrl = `/files/file/${file.filename}`;
    const createDtoWithFileUrl = {
      ...createPlanningFileDto,
      file: fileUrl,
    };
    // console.log(createDtoWithImageUrl);
    try {
      const response =
        await this.planningFilesService.create(createDtoWithFileUrl);
      return response;
    } catch (error) {
      throw error;
    }
  }

  @Get()
  findAll(@Param() params: string[]) {
    return this.planningFilesService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planningFilesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlanningFileDto: UpdatePlanningFileDto,
  ) {
    return this.planningFilesService.update(+id, updatePlanningFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planningFilesService.remove(+id);
  }
}
