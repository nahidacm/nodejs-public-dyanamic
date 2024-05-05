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
import { PortService } from './port.service';
import { CreatePortDto } from './dto/create-port.dto';
import { UpdatePortDto } from './dto/update-port.dto';

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
@Controller('port')
export class PortController {
  constructor(private readonly portService: PortService) {}

  // @Post('upload')
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: 'files/images',
  //       filename: editFileName,
  //     }),
  //     fileFilter: fileFilter,
  //     limits: {
  //       files: 1, // allow up to sd1 files per request,
  //       fieldSize: Number(process.env.FILE_MAX_SIZE || 100),
  //     },
  //   }),
  // )
  // async UploadFile(
  //   @UploadedFile('file') file: Express.Multer.File,
  //   @Body() createPortDto: CreatePortDto,
  // ) {
  //   if (!file) {
  //     throw new BadRequestException('File not found');
  //   }
  //   const imageUrl = `/files/images/${file.filename}`;
  //   const createDtoWithImageUrl = {
  //     ...createPortDto,
  //     photo: imageUrl,
  //   };
  //   console.log(createDtoWithImageUrl);
  //   try {
  //     const response = await this.portService.create(createDtoWithImageUrl);
  //     return response;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
  @Post()
  create(@Body() createPortDto: CreatePortDto) {
    console.log(createPortDto);
    return this.portService.create(createPortDto);
  }

  @Get()
  findAll(@Param() params: string[]) {
    return this.portService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.portService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePortDto: UpdatePortDto) {
    return this.portService.update(+id, updatePortDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.portService.remove(+id);
  }
}
