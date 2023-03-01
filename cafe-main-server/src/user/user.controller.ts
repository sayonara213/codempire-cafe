import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { User } from './entity/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @Get(':id')
  public getUser(@Param('id', ParseIntPipe) id: string): Promise<User> {
    return this.service.getUser(id);
  }

  @Post('/create')
  public createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.service.createUser(body);
  }

  @Get()
  public getAllUsers(): Promise<User[]> {
    return this.service.getAllUsers();
  }

  @Post('/login')
  public loginUser(@Body() body: CreateUserDto): any {
    return body;
  }
}
