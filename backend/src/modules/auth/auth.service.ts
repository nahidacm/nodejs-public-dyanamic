import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne({ username });

    if (user) {
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        const payload = {
          username: user.username,
          sub: user.id,
          role: user.role,
        };
        const expiration = '5h';
        const access_token = await this.jwtService.signAsync(payload, {
          expiresIn: expiration,
        });
        this.userService.updateLoginToken(user.username, access_token);

        return {
          access_token: access_token,
        };
      } else {
        throw new UnauthorizedException('Invalid Credentials');
      }
    } else {
      throw new HttpException('User Not Found', HttpStatus.FAILED_DEPENDENCY);
    }
  }

  async logOut(user) {
    this.userService.updateLoginToken(user.username, null);
  }
}
