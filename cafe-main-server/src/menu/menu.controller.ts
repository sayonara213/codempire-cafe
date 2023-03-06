import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { Menu } from './entity/menu.entity';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/menu.dto';

@Controller('menu')
export class MenuController {
  @Inject(MenuService)
  private readonly service: MenuService;

  //@UseGuards(JwtAuthGuard)
  @Get()
  getMenus(): Promise<Menu[]> {
    return this.service.getAllMenu();
  }

  //@UseGuards(JwtAuthGuard)
  @Post('add')
  addMenu(@Body() menu: CreateMenuDto): Promise<Menu | undefined> {
    return this.service.createMenu(menu);
  }
}
