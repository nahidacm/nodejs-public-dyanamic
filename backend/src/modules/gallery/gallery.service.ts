import { Injectable } from '@nestjs/common';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { PrismaService } from '../../services/prisma.service';
@Injectable()
export class GalleryService {
  constructor(private prisma: PrismaService) {}
  async create(createGalleryDto: CreateGalleryDto) {
    await this.prisma.gallery.create({
      data: { ...createGalleryDto, portId: +createGalleryDto.portId },
    });
    return 'This action adds a new gallery';
  }

  async findAll(params: string[]) {
    const photoGallery = await this.prisma.gallery.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        photo: true,
        portId: true,
      },
      skip: params['skip'],
      take: params['take'],
    });

    return photoGallery;
  }
  findOne(id: number) {
    return `This action returns a #${id} gallery`;
  }

  update(id: number, updateGalleryDto: UpdateGalleryDto) {
    console.log(updateGalleryDto);
    return `This action updates a #${id} gallery`;
  }

  async remove(id: number) {
    try {
      const deletedPhoto = await this.prisma.gallery.delete({
        where: {
          id: id,
        },
      });
      return deletedPhoto;
    } catch (error) {
      console.error(`Error deleting photo with ID ${id}: ${error.message}`);
      throw error;
    }
  }
}
