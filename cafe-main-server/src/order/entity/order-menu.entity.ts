import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';
import { Menu } from 'src/menu/entity/menu.entity';

@Entity('order_menu')
export class OrderMenu {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ManyToOne(() => Order, (order) => order.orderMenus)
  public order: Order;

  @ManyToOne(() => Menu, (menu) => menu.orderMenus)
  public menu: Menu;

  @Column()
  public quantity: number;
}
