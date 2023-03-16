import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Put,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @Get('/:id')
  async getProfile(@Param('id') id: string) {
    return this.service.getUser(id);
  }

  @Put('/:id')
  async addNameAndPhone(
    @Query('id') id: string,
    @Body() body: any,
  ): Promise<any> {
    return this.service.updateUserNameAndPhone(id, body);
  }

  @Put('/photo/:id')
  async addPhoto(@Query('id') id: string, @Body() body: any): Promise<any> {
    return this.service.updateUserPhoto(id, body);
  }
}
