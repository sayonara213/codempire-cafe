import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIngredientDto } from './dto/ingredient.dto';
import { Ingredient } from './entity/ingredient.entity';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}

  async getIngredientById(id: string): Promise<Ingredient> {
    return await this.ingredientRepository.findOne({
      where: { id: id },
    });
  }

  async getAllIngredients(): Promise<Ingredient[]> {
    return this.ingredientRepository.find();
  }

  async deleteIngredient(id: string): Promise<Ingredient> {
    const ingredient = await this.ingredientRepository.findOne({
      where: { id: id },
    });
    return await this.ingredientRepository.remove(ingredient);
  }

  async createIngredient(ingredient: CreateIngredientDto): Promise<Ingredient> {
    return await this.ingredientRepository.save(ingredient);
  }
}
