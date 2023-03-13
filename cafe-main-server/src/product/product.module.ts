import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AllergenService } from 'src/allergen/allergen.service';
import { Product } from './entity/product.entity';
import { Ingredient } from './ingredient/entity/ingredient.entity';
import { IngredientService } from './ingredient/ingredient.service';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Allergen } from './../allergen/allergen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Ingredient, Allergen])],
  controllers: [ProductController],
  providers: [ProductService, IngredientService, AllergenService],
})
export class ProductModule {}
