import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { IUser } from '../types/user.type';
import { instanceToPlain } from 'class-transformer';

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
      user: instanceToPlain(currentUser),
    };
  }

  async register(user: any) {
    const newUser = await this.userService.createUser(user);
    return {
      access_token: await (await this.createToken(newUser)).access_token,
      user: instanceToPlain(newUser),
    };
  }

  async createToken(user: IUser) {
    const payload = { email: user.email, role: user.role, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async addNameAndPhone(id: string, body: any): Promise<any> {
    return await this.userService.updateUser(id, body);
  }

  async allUsers() {
    return await this.userService.getAllUsers();
  }

  async getUserInfoFromToken(token: string): Promise<any> {
    const tokenWithoutBearer = token.split(' ')[1];
    const decodedToken = this.jwtService.verify(tokenWithoutBearer);
    const userId = decodedToken.sub;
    const user = await this.userService.findById(userId);
    if (!user) {
      throw new UnauthorizedException('Invalid token');
    }
    return instanceToPlain(user);
  }
}
