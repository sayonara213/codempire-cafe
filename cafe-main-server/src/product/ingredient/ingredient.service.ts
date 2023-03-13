import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AllergenService } from 'src/allergen/allergen.service';
import { Repository } from 'typeorm';
import { CreateIngredientDto } from './dto/ingredient.dto';
import { Ingredient } from './entity/ingredient.entity';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
    private allergenService: AllergenService,
  ) {}

  async getIngredientById(id: string): Promise<Ingredient> {
    return await this.ingredientRepository.findOne({
      where: { id: id },
      relations: ['allergens'],
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
    const allergens = await this.addAllergensToIngredient(ingredient.allergens);
    const newIngredient = { ...ingredient, allergens: allergens };

    return await this.ingredientRepository.save(newIngredient);
  }

  async addAllergensToIngredient(idArr: string[]) {
    return await Promise.all(
      idArr.map((id) => {
        return this.allergenService.getAllergenById(id);
      }),
    );
  }
}
