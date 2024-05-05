import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../services/prisma.service';
import { User, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    await this.findOne({ username: createUserDto.username }).then((restul) => {
      if (restul) {
        throw new HttpException('username Already Exists', HttpStatus.CONFLICT);
      }
    });
    await this.findOne({ email: createUserDto.email }).then((restul) => {
      if (restul) {
        throw new HttpException(
          'email address Already Exists',
          HttpStatus.CONFLICT,
        );
      }
    });
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);

    return this.prisma.user.create({
      data: { ...createUserDto, password: hash },
    });
  }

  async findAll(params: string[]) {
    const accounts = await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        role: true,
      },
      skip: params['skip'],
      take: params['take'],
    });

    return accounts;
  }

  async findOne(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    try {
      const appUser = await this.prisma.user.delete({
        where: { id },
      });

      return appUser;
    } catch (error) {
      throw new HttpException(
        `Cant delete user: ${id}. make sure it really exists`,
        HttpStatus.FAILED_DEPENDENCY,
      );
    }
  }

  async updateLoginToken(username, access_token) {
    const user = await this.prisma.user.update({
      where: { username: username },
      data: { access_token: access_token },
    });
    return user;
  }
}
