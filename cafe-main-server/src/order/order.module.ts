import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order } from 'src/order/entity/order.entity';
import { OrderMenu } from './entity/order-menu.entity';
import { OrderProduct } from './entity/order-product.entity';
import { MenuService } from 'src/menu/menu.service';
import { ProductService } from 'src/product/product.service';
import { UserService } from 'src/user/user.service';
import { Menu } from 'src/menu/entity/menu.entity';
import { Product } from 'src/product/entity/product.entity';
import { User } from 'src/user/entity/user.entity';
import { Allergen } from 'src/allergen/allergen.entity';
import { AllergenService } from 'src/allergen/allergen.service';
import { IngredientService } from 'src/product/ingredient/ingredient.service';
import { Ingredient } from 'src/product/ingredient/entity/ingredient.entity';
import { AddressService } from 'src/address/address.service';
import { Address } from 'src/address/entity/address.entity';
import { Notification } from 'src/notifications/entity/notifications.entity';
import { NotificationsModule } from 'src/notifications/notifications.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Order,
      OrderProduct,
      OrderMenu,
      Menu,
      Product,
      User,
      Allergen,
      Ingredient,
      Address,
      Notification,
    ]),
    NotificationsModule,
  ],
  controllers: [OrderController],
  providers: [
    OrderService,
    MenuService,
    ProductService,
    UserService,
    AllergenService,
    IngredientService,
    AddressService,
  ],
})
export class OrderModule {}
