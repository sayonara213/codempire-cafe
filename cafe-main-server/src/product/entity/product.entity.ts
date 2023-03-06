import { Menu } from 'src/menu/entity/menu.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: number;

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
}
