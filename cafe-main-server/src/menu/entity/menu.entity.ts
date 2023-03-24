import { Allergen } from 'src/allergen/allergen.entity';
import { OrderMenu } from 'src/order/entity/order-menu.entity';
import { Product } from 'src/product/entity/product.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToMany,
  OneToMany,
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

  @Column({ type: 'varchar', nullable: true })
  public image: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public description: string;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];

  @ManyToMany(() => Allergen)
  @JoinTable()
  allergens: Allergen[];

  @OneToMany(() => OrderMenu, (orderMenu) => orderMenu.menu)
  orderMenus: OrderMenu[];
}
