import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreatePortDto } from './dto/create-port.dto';
import { UpdatePortDto } from './dto/update-port.dto';
import { PrismaService } from '../../services/prisma.service';
import { port, Prisma } from '@prisma/client';

// const prisma = new PrismaClient();

@Injectable()
export class PortService {
  constructor(private prisma: PrismaService) {}

  async findOneByName(
    portWhereUniqueInput: Prisma.portWhereUniqueInput,
  ): Promise<port | null> {
    const existingPort = await this.prisma.port.findUnique({
      where: portWhereUniqueInput,
    });

    return existingPort;
  }

  async create(createPortDto: CreatePortDto) {
    // Check if a port with the same name already exists
    const existingPort = await this.findOneByName({ name: createPortDto.name });

    if (existingPort) {
      throw new HttpException(
        `Port with name '${existingPort.name}' already exists`,
        HttpStatus.CONFLICT,
      );
    }

    // Create a new Port
    await this.prisma.port.create({
      data: {
        ...createPortDto,
        river_area: +createPortDto.river_area,
        land_area: +createPortDto.land_area,
      },
    });

    return 'New port created successfully';
  }

  async findAll(params: string[]) {
    const ports = await this.prisma.port.findMany({
      select: {
        id: true,
        name: true,
        location: true,
        river_area: true,
        land_area: true,
      },
      skip: params['skip'],
      take: params['take'],
    });

    return ports;
  }

  findOne(id: number) {
    return `This action returns a #${id} port`;
  }

  update(id: number, updatePortDto: UpdatePortDto) {
    console.log(updatePortDto);
    return `This action updates a #${id} port`;
  }
  async remove(id: number) {
    try {
      const deletedPort = await this.prisma.port.delete({
        where: {
          id: id,
        },
      });
      return deletedPort;
    } catch (error) {
      console.error(`Error deleting port with ID ${id}: ${error.message}`);
      throw error;
    }
  }
}
