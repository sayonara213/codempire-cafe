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

  async getById(id: string): Promise<Menu> {
    return await this.menuRepository.findOne({
      where: { id: id },
      relations: ['products', 'allergens'],
    });
  }

  async getPlainById(id: string): Promise<Menu> {
    return await this.menuRepository.findOne({
      where: { id: id },
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
        return this.allergenService.getById(id);
      }),
    );
  }

  async getAllMenu(
    sortBy: string,
    order: string,
    types: string[],
  ): Promise<Menu[]> {
    const sortOptions = {
      name: 'product.name',
      price: 'product.price',
      weight: 'product.weight',
    };

    const orderOptions = {
      asc: 'ASC',
      desc: 'DESC',
    };

    const sortField = sortOptions[sortBy] || 'product.name';
    const orderField = orderOptions[order] || 'ASC';

    if (types === undefined) {
      return this.menuRepository
        .createQueryBuilder('menu')
        .leftJoinAndSelect('menu.allergens', 'menu_allergen')
        .leftJoinAndSelect('menu.products', 'product')
        .leftJoinAndSelect('product.ingredients', 'ingredient')
        .leftJoinAndSelect('ingredient.allergens', 'allergen')
        .select(['menu', 'menu_allergen', 'product', 'ingredient', 'allergen'])
        .orderBy(sortField, orderField)
        .getMany();
    }

    return this.menuRepository
      .createQueryBuilder('menu')
      .leftJoinAndSelect('menu.allergens', 'menu_allergen')
      .leftJoinAndSelect('menu.products', 'product')
      .leftJoinAndSelect('product.ingredients', 'ingredient')
      .leftJoinAndSelect('ingredient.allergens', 'allergen')
      .select(['menu', 'menu_allergen', 'product', 'ingredient', 'allergen'])
      .where('product.type IN (:...types)', {
        types: Array.isArray(types) ? types : [types],
      })
      .orderBy(sortField, orderField)
      .getMany();
  }

  async getLimitedMenu(limit: number): Promise<Menu[]> {
    return await this.menuRepository.find({
      take: limit,
      relations: ['products', 'allergens'],
    });
  }

  async deleteMenu(id: string): Promise<Menu> {
    const menu = await this.menuRepository.findOne({ where: { id: id } });
    return await this.menuRepository.remove(menu);
  }
}
