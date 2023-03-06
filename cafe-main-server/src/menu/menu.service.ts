import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './entity/menu.entity';
import { CreateMenuDto } from './dto/menu.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
  ) {}

  async createMenu(menu: CreateMenuDto): Promise<Menu | undefined> {
    const newUser = new Menu();
    newUser.name = menu.name;
    newUser.description = menu.description;
    newUser.price = menu.price;
    newUser.weight = menu.weight;
    newUser.image = menu.image;

    return await this.menuRepository.save(newUser);
  }

  async getAllMenu(): Promise<Menu[]> {
    return this.menuRepository.find();
  }
}
