import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './entity/menu.entity';
import { CreateMenuDto } from './dto/menu.dto';
import { ProductService } from 'src/product/product.service';
import { AllergenService } from 'src/allergen/allergen.service';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
    private productService: ProductService,
    private allergenService: AllergenService,
  ) {}

  async getMenuById(id: string): Promise<Menu> {
    return await this.menuRepository.findOne({
      where: { id: id },
      relations: ['products'],
    });
  }

  async createMenu(menu: CreateMenuDto): Promise<Menu | undefined> {
    const products = await this.addProductsToMenu(menu.products);
    const allergens = await this.addAllergensToMenu(menu.allergens);
    const newMenu = { ...menu, products: products, allergens: allergens };
    return await this.menuRepository.save(newMenu);
  }

  async addProductsToMenu(idArr: string[]) {
    return await Promise.all(
      idArr.map((id) => {
        return this.productService.getProductById(id);
      }),
    );
  }

  async addAllergensToMenu(idArr: string[]) {
    return await Promise.all(
      idArr.map((id) => {
        return this.allergenService.getAllergenById(id);
      }),
    );
  }

  async getAllMenu(): Promise<Menu[]> {
    return this.menuRepository
      .createQueryBuilder('menu')
      .leftJoinAndSelect('menu.allergens', 'menu_allergen')
      .leftJoinAndSelect('menu.products', 'product')
      .leftJoinAndSelect('product.ingredients', 'ingredient')
      .leftJoinAndSelect('ingredient.allergens', 'allergen')
      .getMany();
  }

  async deleteMenu(id: string): Promise<Menu> {
    const menu = await this.menuRepository.findOne({ where: { id: id } });
    return await this.menuRepository.remove(menu);
  }
}
