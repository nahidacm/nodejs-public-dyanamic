import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { PrismaService } from '../../services/prisma.service';
//import { assets, Prisma } from '@prisma/client';
@Injectable()
export class AssetsService {
  constructor(private prisma: PrismaService) {}
  // async findOneByReg(
  //   assetsWhereUniqueInput: Prisma.assetsWhereUniqueInput,
  // ): Promise<assets | null> {
  //   const existingHumanResource = await this.prisma.assets.findUnique({
  //     where: assetsWhereUniqueInput,
  //   });

  //   return existingHumanResource;
  // }
  async create(createAssetDto: CreateAssetDto) {
    // const existingAssets = await this.findOneByReg({
    //   identity_number: createAssetDto.identity_number,
    // });
    // if (existingAssets) {
    //   throw new HttpException(
    //     'HumanResouce Already Exists',
    //     HttpStatus.CONFLICT,
    //   );
    // }
    await this.prisma.assets.create({
      data: createAssetDto,
    });
    return 'This action adds a new asset';
  }

  async findAll(params: string[]) {
    const assets = await this.prisma.assets.findMany({
      select: {
        id: true,
        name: true,
        detail: true,
        identity_number: true,
        location: true,
      },
      skip: params['skip'],
      take: params['take'],
    });

    return assets;
  }

  findOne(id: number) {
    return `This action returns a #${id} asset`;
  }

  update(id: number, updateAssetDto: UpdateAssetDto) {
    console.log(updateAssetDto);
    return `This action updates a #${id} asset`;
  }

  async remove(id: number) {
    try {
      const assets = await this.prisma.assets.delete({
        where: {
          id: id,
        },
      });
      return assets;
    } catch (error) {
      console.error(`Error deleting Assets with ID ${id}: ${error.message}`);
      throw error;
    }
  }
}
