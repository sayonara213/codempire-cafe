import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Menu } from './entity/menu.entity';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/menu.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwtAuthGuard';
import { Roles } from 'src/auth/roles/roles.decorator';
import { UserRole } from 'src/user/entity/user.entity';
import { RoleGuard } from 'src/auth/guard/roleGuard';
import { API } from './../constants/endpoints';

@Controller(API.MENU)
export class MenuController {
  @Inject(MenuService)
  private readonly service: MenuService;

  @Get(API.LIST_ALL)
  getMenus(
    @Query('sortBy') sortBy: string,
    @Query('order') order: string,
    @Query('types') types: string[],
  ): Promise<Menu[]> {
    return this.service.getAllMenu(sortBy, order, types);
  }

  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post(API.ADD)
  addMenu(@Body() menu: CreateMenuDto): Promise<Menu | undefined> {
    return this.service.createMenu(menu);
  }

  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete(`${API.DELETE}/:id`)
  deleteMenu(@Param('id') id: string): Promise<Menu> {
    return this.service.deleteMenu(id);
  }

  @Get(`${API.GET}/:id`)
  getMenuById(@Param('id') id: string): Promise<Menu> {
    return this.service.getMenuById(id);
  }
}
