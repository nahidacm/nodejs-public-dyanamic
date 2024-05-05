import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateVesselDto } from './dto/create-vessel.dto';
import { UpdateVesselDto } from './dto/update-vessel.dto';
import { PrismaService } from '../../services/prisma.service';
import { vessel, Prisma } from '@prisma/client';

@Injectable()
export class VesselService {
  constructor(private prisma: PrismaService) {}
  async findOneByName(
    vesselWhereUniqueInput: Prisma.vesselWhereUniqueInput,
  ): Promise<vessel | null> {
    const existingVessel = await this.prisma.vessel.findUnique({
      where: vesselWhereUniqueInput,
    });

    return existingVessel;
  }
  async create(createVesselDto: CreateVesselDto) {
    const existingVesselByName = await this.findOneByName({
      name: createVesselDto.name,
    });
    const existingVesselByReg = await this.findOneByName({
      registration_number: createVesselDto.registration_number,
    });

    if (existingVesselByName || existingVesselByReg) {
      throw new HttpException('Vessel Already Exists', HttpStatus.CONFLICT);
    }

    // Create a new vessel
    await this.prisma.vessel.create({
      data: { ...createVesselDto, portId: +createVesselDto.portId },
    });

    return 'New Vessel created successfully';
  }

  async findAll(params: string[]) {
    const vessels = await this.prisma.vessel.findMany({
      select: {
        id: true,
        name: true,
        photo: true,
        detail: true,
        registration_number: true,
        portId: true,
      },
      skip: params['skip'],
      take: params['take'],
    });

    return vessels;
  }

  findOne(id: number) {
    return `This action returns a #${id} vessel`;
  }

  update(id: number, updateVesselDto: UpdateVesselDto) {
    return `This action updates a #${id} vessel`;
  }

  async remove(id: number) {
    try {
      const deletedVessel = await this.prisma.vessel.delete({
        where: {
          id: id,
        },
      });
      return deletedVessel;
    } catch (error) {
      console.error(`Error deleting Vessel with ID ${id}: ${error.message}`);
      throw error;
    }
  }
}
