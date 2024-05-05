import { Injectable } from '@nestjs/common';
import { CreatePassengerTrafficDto } from './dto/create-passenger-traffic.dto';
import { UpdatePassengerTrafficDto } from './dto/update-passenger-traffic.dto';
import { PrismaService } from '@services/prisma.service';
@Injectable()
export class PassengerTrafficService {
  constructor(private prisma: PrismaService) {}
  async create(createPassengerTrafficDto: CreatePassengerTrafficDto) {
    await this.prisma.passanger_traffic.create({
      data: createPassengerTrafficDto,
    });
    return 'This action adds a new passengerTraffic';
  }

  async findAll(params: string[]) {
    const passanger_traffic = await this.prisma.passanger_traffic.findMany({
      select: {
        id: true,
        date: true,
        ghat: true,
        passenger_count: true,
      },
      skip: params['skip'],
      take: params['take'],
    });

    return passanger_traffic;
  }

  findOne(id: number) {
    return `This action returns a #${id} passengerTraffic`;
  }

  update(id: number, _updatePassengerTrafficDto: UpdatePassengerTrafficDto) {
    return `This action updates a #${id} passengerTraffic`;
  }

  async remove(id: number) {
    try {
      const deleted_Passenger_Traffic =
        await this.prisma.passanger_traffic.delete({
          where: {
            id: id,
          },
        });
      return deleted_Passenger_Traffic;
    } catch (error) {
      console.error(
        `Error deleting Passenger traffic with ID ${id}: ${error.message}`,
      );
      throw error;
    }
  }
}
