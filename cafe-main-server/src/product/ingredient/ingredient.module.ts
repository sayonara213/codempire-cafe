import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from './entity/ingredient.entity';
import { IngredientController } from './ingredient.controller';
import { IngredientService } from './ingredient.service';
import { Allergen } from './../../allergen/allergen.entity';
import { AllergenService } from './../../allergen/allergen.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredient, Allergen])],
  controllers: [IngredientController],
  providers: [IngredientService, AllergenService],
})
export class IngredientModule {}
