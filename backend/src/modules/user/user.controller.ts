import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from '../auth/role.enum';
import { Roles } from '../auth/roles.decorator';
import { AuthGuard } from '../auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Roles(Role.Admin)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(@Param() params: string[]) {
    return this.userService.findAll(params);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getProfile(@Request() req) {
    const username = req.user.username;
    let user = this.userService.findOne({ username }).then((result) => {
      delete result.password;
      return result;
    });

    return user;
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    let user = this.userService.findOne({ username }).then((result) => {
      delete result.password;
      return result;
    });

    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
