import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import LocalAuthGuard from './guard/localAuthGuard';
import { CreateUserDto } from '../user/dto/user.dto';
import { JwtAuthGuard } from './guard/jwtAuthGuard';
import { RoleGuard } from './guard/roleGuard';
import { UserRole } from '../user/entity/user.entity';
import { Roles } from './roles/roles.decorator';
import { API } from '../constants/endpoints';

@Controller(API.AUTH)
export class AuthController {
  @Inject(AuthService)
  private readonly service: AuthService;

  @UseGuards(LocalAuthGuard)
  @Post(API.LOG_IN)
  async login(@Body() user: CreateUserDto): Promise<any> {
    return this.service.login(user);
  }

  @Post(API.SIGN_UP)
  async register(@Body() user: CreateUserDto): Promise<any> {
    return this.service.register(user);
  }

  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get(API.GET_ALL_USERS)
  async getProfile(@Req() req) {
    return this.service.allUsers();
  }
}
