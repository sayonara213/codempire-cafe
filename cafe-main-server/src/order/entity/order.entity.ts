import { Address } from 'src/address/entity/address.entity';
import { User } from 'src/user/entity/user.entity';
import { Comment } from 'src/comment/entity/comment.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderMenu } from './order-menu.entity';
import { OrderProduct } from './order-product.entity';

enum OrderStatus {
  PENDING = 'pending',
  DELIVERED = 'delivered',
  CANCELED = 'canceled',
}

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.PENDING })
  public status: OrderStatus;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @ManyToOne(() => Address, (address) => address.orders)
  public address: Address;

  @ManyToOne(() => User, (user) => user.orders)
  public user: User;

  @OneToOne(() => Comment, (comment) => comment.order, { nullable: true })
  public comment: Comment;

  @OneToMany(() => OrderMenu, (orderMenu) => orderMenu.order, {
    nullable: true,
  })
  public orderMenus: OrderMenu[];

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order, {
    nullable: true,
  })
  public orderProducts: OrderProduct[];
}
