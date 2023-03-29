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
    return this.service.findById(id);
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() body: any): Promise<any> {
    return this.service.updateUser(id, body);
  }

  @Put('/photo/:id')
  async addPhoto(@Param('id') id: string, @Body() body: any): Promise<any> {
    return this.service.updateUserPhoto(id, body);
  }

  @Put('/password/:id')
  async changePassword(
    @Param('id') id: string,
    @Body() body: { oldPassword: string; newPassword: string },
  ): Promise<any> {
    return this.service.changeUserPassword(id, body);
  }
}
