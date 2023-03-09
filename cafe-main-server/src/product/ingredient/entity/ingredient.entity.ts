import { Allergen } from 'src/allergen/allergen.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Product } from '../../entity/product.entity';

@Entity('ingredient')
export class Ingredient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 120 })
  name: string;

  @ManyToMany(() => Product, (product) => product.ingredients)
  products: Product[];

  @ManyToMany(() => Allergen)
  @JoinTable()
  allergens: Allergen[];
}
