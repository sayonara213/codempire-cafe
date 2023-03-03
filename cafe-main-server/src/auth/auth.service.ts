import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../user/dto/user.dto';
import { IUser } from '../types/user.type';
import { classToPlain } from 'class-transformer';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (user) {
      const match = await bcrypt.compare(pass, user.password);
      if (match) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }
  }

  async login(user: any) {
    const currentUser = await this.userService.findOne(user.email);
    return {
      access_token: await (await this.createToken(currentUser)).access_token,
      user: classToPlain(currentUser),
    };
  }

  async register(user: any) {
    const newUser = await this.userService.createUser(user);
    return {
      access_token: await (await this.createToken(newUser)).access_token,
      user: classToPlain(newUser),
    };
  }

  async createToken(user: IUser) {
    const payload = { email: user.email, role: user.role, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async allUsers() {
    return await this.userService.getAllUsers();
  }
}
