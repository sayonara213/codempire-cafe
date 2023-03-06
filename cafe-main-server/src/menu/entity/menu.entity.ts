import { Product } from 'src/product/entity/product.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToMany,
} from 'typeorm';

@Entity('menu')
export class Menu {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public name: string;

  @Column({ type: 'int' })
  public price: number;

  @Column({ type: 'int' })
  public weight: number;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];
}
