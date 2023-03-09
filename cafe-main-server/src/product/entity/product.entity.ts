import { Menu } from 'src/menu/entity/menu.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Ingredient } from '../ingredient/entity/ingredient.entity';
import { Allergen } from './../../allergen/allergen.entity';

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

  @ManyToMany(() => Menu, (menu) => menu.products)
  menus: Menu[];

  @ManyToMany(() => Ingredient)
  @JoinTable()
  ingredients: Ingredient[];
}
