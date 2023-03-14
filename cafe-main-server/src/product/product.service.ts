import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Product } from './entity/product.entity';
import { CreateProductDto } from './dto/product.dto';
import { IngredientService } from './ingredient/ingredient.service';
import { IsArray } from 'class-validator';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    private ingredientService: IngredientService,
  ) {}

  async getProductById(id: string): Promise<Product> {
    return await this.productRepository.findOne({
      where: { id: id },
      relations: ['ingredients'],
    });
  }

  async addProduct(product: CreateProductDto): Promise<Product | undefined> {
    const ingredients = await this.addIngredientsToProduct(product.ingredients);
    const newProduct = { ...product, ingredients: ingredients };
    return await this.productRepository.save(newProduct);
  }

  async getAllProductWithParam(
    sortBy: string,
    order: string,
    types: string[],
  ): Promise<Product[]> {
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
      return undefined;
    }

    return this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.ingredients', 'ingredient')
      .leftJoinAndSelect('ingredient.allergens', 'allergen')
      .select(['product', 'ingredient', 'allergen'])
      .where({ type: In(Array.isArray(types) ? types : [types]) })
      .orderBy(sortField, orderField)
      .getMany();
  }

  async getAllProduct(): Promise<Product[]> {
    return this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.ingredients', 'ingredient')
      .leftJoinAndSelect('ingredient.allergens', 'allergen')
      .select(['product', 'ingredient', 'allergen'])
      .getMany();
  }

  async findProductAllergens(productId: string): Promise<any> {
    const query = this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.ingredients', 'ingredient')
      .leftJoinAndSelect('ingredient.allergens', 'allergen')
      .where('product.id = :productId', { productId })
      .getOne();
    const product = await query;
    return product.ingredients.flatMap((ingredient) => ingredient.allergens);
  }

  async deleteProduct(id: string): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id: id } });
    return await this.productRepository.remove(product);
  }

  async updateProduct(id: string, product: CreateProductDto): Promise<Product> {
    const productToUpdate = await this.productRepository.findOne({
      where: { id: id },
    });
    productToUpdate.name = product.name;
    productToUpdate.description = product.description;
    productToUpdate.price = product.price;
    productToUpdate.weight = product.weight;
    return await this.productRepository.save(productToUpdate);
  }

  async addIngredientsToProduct(idArr: string[]) {
    return await Promise.all(
      idArr.map((id) => {
        return this.ingredientService.getIngredientById(id);
      }),
    );
  }
}
