import { Product } from 'src/product/entity/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';

@Entity('order_product')
export class OrderProduct {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ManyToOne(() => Order, (order) => order.orderProducts)
  public order: Order;

  @ManyToOne(() => Product, (product) => product.orderProducts)
  public product: Product;

  @Column()
  public quantity: number;
}
