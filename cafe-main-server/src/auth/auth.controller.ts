import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import LocalAuthGuard from './guard/localAuthGuard';
import { CreateUserDto } from '../user/dto/user.dto';
import { JwtAuthGuard } from './guard/jwtAuthGuard';
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

  @Put(API.ADDITIONAL + API.ID_PARAM)
  async addNameAndPhone(
    @Param('id') id: string,
    @Body() body: any,
  ): Promise<any> {
    this.service.addNameAndPhone(id, body);
  }

  @UseGuards(JwtAuthGuard)
  @Get(API.RETRIEVE_USER_INFO)
  async getUserInfoFromToken(@Req() req: any) {
    return this.service.getUserInfoFromToken(req.headers.authorization);
  }
}
