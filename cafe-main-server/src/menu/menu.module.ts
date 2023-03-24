import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Allergen } from 'src/allergen/allergen.entity';
import { AllergenService } from 'src/allergen/allergen.service';
import { Product } from 'src/product/entity/product.entity';
import { Ingredient } from 'src/product/ingredient/entity/ingredient.entity';
import { IngredientService } from 'src/product/ingredient/ingredient.service';
import { ProductService } from 'src/product/product.service';
import { Menu } from './entity/menu.entity';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { OrderProduct } from './../order/entity/order-product.entity';
import { OrderMenu } from 'src/order/entity/order-menu.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Menu,
      Product,
      Ingredient,
      Allergen,
      OrderProduct,
      OrderMenu,
    ]),
  ],
  controllers: [MenuController],
  providers: [MenuService, ProductService, IngredientService, AllergenService],
})
export class MenuModule {}
