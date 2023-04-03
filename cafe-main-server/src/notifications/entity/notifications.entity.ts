import { Order } from 'src/order/entity/order.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity('notification')
export class Notification {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'boolean', default: false })
  public isAdmin: boolean;

  @Column({ type: 'boolean', default: false })
  public isSeen: boolean;

  @Column({ type: 'varchar', length: 255 })
  public userId: string;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @CreateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;

  @ManyToOne(() => Order, (order) => order.notifications)
  public order: Order;
}
