import { Address } from 'src/address/entity/address.entity';
import { User } from 'src/user/entity/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderMenu } from './order-menu.entity';
import { OrderProduct } from './order-product.entity';

export enum OrderStatus {
  CREATED = 'created',
  READY = 'ready',
  ON_WAY = 'onWay',
  DELIVERED = 'delivered',
  CANCELED = 'canceled',
}

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.CREATED })
  public status: OrderStatus;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  public deliveryDate: Date;

  @ManyToOne(() => Address, (address) => address.orders)
  public address: Address;

  @ManyToOne(() => User, (user) => user.orders)
  public user: User;

  @Column({ type: 'varchar', length: 255, nullable: true })
  public comment: string;

  @Column({ type: 'int', nullable: true })
  public stars: number;

  @OneToMany(() => OrderMenu, (orderMenu) => orderMenu.order, {
    nullable: true,
  })
  public orderMenus: OrderMenu[];

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order, {
    nullable: true,
  })
  public orderProducts: OrderProduct[];
}
