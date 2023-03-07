import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Product } from '../../entity/product.entity';

@Entity('ingredient')
export class Ingredient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 120 })
  name: string;

  @Column({ array: true, type: 'varchar', length: 120 })
  allergens: string[];

  @ManyToMany(() => Product, (product) => product.ingredients)
  products: Product[];
}
