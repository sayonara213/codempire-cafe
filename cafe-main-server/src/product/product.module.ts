import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { Ingredient } from './ingredient/entity/ingredient.entity';
import { IngredientService } from './ingredient/ingredient.service';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Ingredient])],
  controllers: [ProductController],
  providers: [ProductService, IngredientService],
})
export class ProductModule {}
