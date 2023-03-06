import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Menu } from './entity/menu.entity';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/menu.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwtAuthGuard';
import { Roles } from 'src/auth/roles/roles.decorator';
import { UserRole } from 'src/user/entity/user.entity';
import { RoleGuard } from 'src/auth/guard/roleGuard';

@Controller('menu')
export class MenuController {
  @Inject(MenuService)
  private readonly service: MenuService;

  @Get()
  getMenus(): Promise<Menu[]> {
    return this.service.getAllMenu();
  }

  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post('add')
  addMenu(@Body() menu: CreateMenuDto): Promise<Menu | undefined> {
    return this.service.createMenu(menu);
  }

  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete('delete/:id')
  deleteMenu(@Param('id') id: string): Promise<Menu> {
    return this.service.deleteMenu(id);
  }
}
