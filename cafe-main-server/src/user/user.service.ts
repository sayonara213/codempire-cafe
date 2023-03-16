import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
import { User } from './entity/user.entity';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  async findOne(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email: email } });
  }

  async getUser(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id: id } });
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(body: CreateUserDto): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { email: body.email },
    });
    if (user) {
      throw new HttpException('User Already Exists', HttpStatus.BAD_REQUEST);
    }
    const newUser = new User();
    newUser.email = body.email;

    const salt = await bcrypt.genSalt();
    newUser.password = await bcrypt.hash(body.password, salt);
    return await this.userRepository.save(newUser);
  }

  async updateUserNameAndPhone(id: string, body: any): Promise<User> {
    const currentUser = await this.userRepository.findOne({
      where: { id: id },
    });
    if (!currentUser) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
    currentUser.name = body.username;
    currentUser.phone = body.phone;
    return await this.userRepository.save(currentUser);
  }
}
