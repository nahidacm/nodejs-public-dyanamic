import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { PrismaService } from '@services/prisma.service';
@Injectable()
export class VideoService {
  constructor(private prisma: PrismaService) {}
  async create(createVideoDto: CreateVideoDto) {
    console.log(createVideoDto);
    await this.prisma.video.create({
      data: {
        ...createVideoDto,
        port_activitiesId: +createVideoDto.port_activitiesId,
      },
    });
    return 'This action adds a new video';
  }

  findAll(params: string[]) {
    const video = this.prisma.video.findMany({
      select: {
        id: true,
        video: true,
        title: true,
        description: true,
      },
      skip: params['skip'],
      take: params['take'],
    });
    return video;
  }

  findOne(id: number) {
    return `This action returns a #${id} video`;
  }

  update(id: number, updateVideoDto: UpdateVideoDto) {
    return `This action updates a #${id} video`;
  }

  async remove(id: number) {
    try {
      const video = await this.prisma.video.delete({
        where: {
          id: id,
        },
      });
      return video;
    } catch (error) {
      console.error(`Error deleting Video with ID ${id}: ${error.message}`);
      throw error;
    }
  }
}
