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

  async findById(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id: id } });
  }

  async findAddressByUserId(id: string): Promise<User> {
    return this.userRepository.findOne({
      where: { id: id },
      relations: ['addresses'],
    });
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

  async updateUserPhoto(id: string, body: any): Promise<User> {
    const currentUser = await this.userRepository.findOne({
      where: { id: id },
    });
    if (!currentUser) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
    currentUser.image = body.photo;
    return await this.userRepository.save(currentUser);
  }

  async changeUserPassword(
    id: string,
    body: { oldPassword: string; newPassword: string },
  ): Promise<User> {
    const currentUser = await this.userRepository.findOne({
      where: { id: id },
    });
    if (!currentUser) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
    const isMatch = await bcrypt.compare(
      body.oldPassword,
      currentUser.password,
    );
    if (!isMatch) {
      throw new HttpException('Incorrect Password', HttpStatus.BAD_REQUEST);
    }
    const salt = await bcrypt.genSalt();
    currentUser.password = await bcrypt.hash(body.newPassword, salt);
    return await this.userRepository.save(currentUser);
  }

  async deleteUser(id: string): Promise<User> {
    const currentUser = await this.userRepository.findOne({
      where: { id: id },
    });
    if (!currentUser) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
    return await this.userRepository.remove(currentUser);
  }

  async updateUser(id: string, body: any): Promise<User> {
    const currentUser = await this.userRepository.findOne({
      where: { id: id },
    });

    if (!currentUser) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
    if (body.username) {
      currentUser.name = body.username;
    }
    if (body.phone) {
      currentUser.phone = body.phone;
    }
    if (body.email) {
      currentUser.email = body.email;
    }
    return await this.userRepository.save(currentUser);
  }
}
