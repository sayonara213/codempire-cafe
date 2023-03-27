import { Menu } from 'src/menu/entity/menu.entity';
import { OrderProduct } from 'src/order/entity/order-product.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Ingredient } from '../ingredient/entity/ingredient.entity';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 120 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'int' })
  weight: number;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'varchar' })
  type: string;

  @ManyToMany(() => Menu, (menu) => menu.products)
  menus: Menu[];

  @ManyToMany(() => Ingredient)
  @JoinTable()
  ingredients: Ingredient[];

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.product)
  orderProducts: OrderProduct[];
}
