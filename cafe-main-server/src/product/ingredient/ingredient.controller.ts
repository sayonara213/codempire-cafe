import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { API } from 'src/constants/endpoints';
import { CreateIngredientDto } from './dto/ingredient.dto';
import { IngredientService } from './ingredient.service';

@Controller('ingredient')
export class IngredientController {
  @Inject(IngredientService)
  private readonly service: IngredientService;

  @Post(API.ADD)
  async addIngredient(@Body() ingredient: CreateIngredientDto) {
    return await this.service.createIngredient(ingredient);
  }

  @Get(API.GET)
  async getIngredientById(id: string) {
    return await this.service.getIngredientById(id);
  }

  @Get(API.LIST_ALL)
  async getAllIngredients() {
    return await this.service.getAllIngredients();
  }
}
