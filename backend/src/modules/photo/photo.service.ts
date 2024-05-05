import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { PrismaService } from '@services/prisma.service';
@Injectable()
export class PhotoService {
  constructor(private prisma: PrismaService) {}
  async create(createPhotoDto: CreatePhotoDto) {
    await this.prisma.photo.create({
      data: {
        ...createPhotoDto,
        port_activitiesId: +createPhotoDto.port_activitiesId,
      },
    });
    return 'This action adds a new photo';
  }

  findAll(params: string[]) {
    const photos = this.prisma.photo.findMany({
      select: {
        id: true,
        photo: true,
        title: true,
        description: true,
      },
      skip: params['skip'],
      take: params['take'],
    });
    return photos;
  }

  findOne(id: number) {
    return `This action returns a #${id} photo`;
  }

  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    console.log(updatePhotoDto);
    return `This action updates a #${id} photo`;
  }

  async remove(id: number) {
    try {
      const photo = await this.prisma.photo.delete({
        where: {
          id: id,
        },
      });
      return photo;
    } catch (error) {
      console.error(`Error deleting Photo with ID ${id}: ${error.message}`);
      throw error;
    }
  }
}
