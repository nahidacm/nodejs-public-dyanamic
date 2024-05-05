import { Injectable } from '@nestjs/common';
import { CreateTicketBookingDto } from './dto/create-ticket-booking.dto';
import { UpdateTicketBookingDto } from './dto/update-ticket-booking.dto';
import { PrismaService } from '@services/prisma.service';

@Injectable()
export class TicketBookingService {
  constructor(private prisma: PrismaService) {}
  async create(createTicketBookingDto: CreateTicketBookingDto) {
    await this.prisma.ticket_book_requesition.create({
      data: createTicketBookingDto,
    });
    return 'This action adds a new ticketBooking';
  }

  findAll(params: string[]) {
    const ticketBooking = this.prisma.ticket_book_requesition.findMany({
      select: {
        id: true,
        date: true,
        quantity: true,
        ghat: true,
        title: true,
        detail: true,
      },
      skip: params['skip'],
      take: params['take'],
    });
    return ticketBooking;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticketBooking`;
  }

  update(id: number, updateTicketBookingDto: UpdateTicketBookingDto) {
    console.log(updateTicketBookingDto);
    return `This action updates a #${id} ticketBooking`;
  }

  async remove(id: number) {
    try {
      const ticketBooking = await this.prisma.ticket_book_requesition.delete({
        where: {
          id: id,
        },
      });
      return ticketBooking;
    } catch (error) {
      console.error(
        `Error deleting TicketBooking with ID ${id}: ${error.message}`,
      );
      throw error;
    }
  }
}
