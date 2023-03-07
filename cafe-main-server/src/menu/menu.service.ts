import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './entity/menu.entity';
import { CreateMenuDto } from './dto/menu.dto';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
    private productService: ProductService,
  ) {}

  async getMenuById(id: string): Promise<Menu> {
    return await this.menuRepository.findOne({
      where: { id: id },
      relations: ['products'],
    });
  }

  async createMenu(menu: CreateMenuDto): Promise<Menu | undefined> {
    const products = await this.addProductsToMenu(menu.products);
    const newMenu = { ...menu, products: products };
    return await this.menuRepository.save(newMenu);
  }

  async addProductsToMenu(idArr: string[]) {
    return await Promise.all(
      idArr.map((id) => {
        return this.productService.getProductById(id);
      }),
    );
  }

  async getAllMenu(): Promise<Menu[]> {
    return this.menuRepository.find();
  }

  async deleteMenu(id: string): Promise<Menu> {
    const menu = await this.menuRepository.findOne({ where: { id: id } });
    return await this.menuRepository.remove(menu);
  }
}
