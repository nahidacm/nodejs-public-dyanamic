import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateGhatDto } from './dto/create-ghat.dto';
import { UpdateGhatDto } from './dto/update-ghat.dto';
import { PrismaService } from '../../services/prisma.service';
import { ghat, Prisma } from '@prisma/client';

@Injectable()
export class GhatService {
  constructor(private prisma: PrismaService) {}
  async findOneByName(
    ghatWhereUniqueInput: Prisma.ghatWhereUniqueInput,
  ): Promise<ghat | null> {
    const existingGhat = await this.prisma.ghat.findUnique({
      where: ghatWhereUniqueInput,
    });

    return existingGhat;
  }
  async create(createGhatDto: CreateGhatDto) {
    const existingGhat = await this.findOneByName({ name: createGhatDto.name });

    if (existingGhat) {
      throw new HttpException('Ghat Already Exists', HttpStatus.CONFLICT);
    }

    // Create a new ghat
    await this.prisma.ghat.create({
      data: createGhatDto,
    });

    return 'New Ghat created successfully';
  }

  async findAll(params: string[]) {
    const ghats = await this.prisma.ghat.findMany({
      select: {
        id: true,
        name: true,
        lease_status: true,
        leaser: true,
        geolocation_of_ghat: true,
        lease_amount_23: true,
        lease_amount_24: true,
        // lease_amount_23: true,
        portId: true,
      },
      skip: params['skip'],
      take: params['take'],
    });

    return ghats;
  }
  findOne(id: number) {
    return `This action returns a #${id} ghat`;
  }

  update(id: number, updateGhatDto: UpdateGhatDto) {
    console.log(updateGhatDto);
    return `This action updates a #${id} ghat`;
  }

  async remove(id: number) {
    try {
      const deletedGhat = await this.prisma.ghat.delete({
        where: {
          id: id,
        },
      });
      return deletedGhat;
    } catch (error) {
      console.error(`Error deleting ghat with ID ${id}: ${error.message}`);
      throw error;
    }
  }
}
