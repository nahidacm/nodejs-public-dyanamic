import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateHumanResouceDto } from './dto/create-human-resouce.dto';
import { UpdateHumanResouceDto } from './dto/update-human-resouce.dto';
import { PrismaService } from '../../services/prisma.service';
import { human_resource, Prisma } from '@prisma/client';

@Injectable()
export class HumanResoucesService {
  constructor(private prisma: PrismaService) {}
  // create(createHumanResouceDto: CreateHumanResouceDto) {
  //   return 'This action adds a new humanResouce';
  // }
  async findOneByEmail(
    human_resourceWhereUniqueInput: Prisma.human_resourceWhereUniqueInput,
  ): Promise<human_resource | null> {
    const existingHumanResource = await this.prisma.human_resource.findUnique({
      where: human_resourceWhereUniqueInput,
    });

    return existingHumanResource;
  }
  async create(createHumanResouceDto: CreateHumanResouceDto) {
    console.log(createHumanResouceDto);
    // Check if a human resouce with the same email already exists
    // const existingHumanResource = await this.findOneByEmail({
    //   email: createHumanResouceDto.email,
    // });

    // if (existingHumanResource) {
    //   throw new HttpException(
    //     `Human resource with email '${existingHumanResource.email}' already exists`,
    //     HttpStatus.CONFLICT,
    //   );
    // }

    // Create a new human resource
    await this.prisma.human_resource.create({
      data: createHumanResouceDto,
    });

    return 'New Human Resource created successfully';
  }

  // findAll() {
  //   return `This action returns all humanResouces`;
  // }

  async findAll(params: string[]) {
    const humanResouces = await this.prisma.human_resource.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        photo: true,
        designation: true,
        office_name: true,
        contact_number: true,
      },
      skip: params['skip'],
      take: params['take'],
    });

    return humanResouces;
  }

  findOne(id: number) {
    return `This action returns a #${id} humanResouce`;
  }

  update(id: number, updateHumanResouceDto: UpdateHumanResouceDto) {
    console.log(updateHumanResouceDto);
    return `This action updates a #${id} humanResouce`;
  }

  async remove(id: number) {
    try {
      const deletedHumanResouce = await this.prisma.human_resource.delete({
        where: {
          id: id,
        },
      });
      return deletedHumanResouce;
    } catch (error) {
      console.error(
        `Error deleting HumanResouce with ID ${id}: ${error.message}`,
      );
      throw error;
    }
  }
}
