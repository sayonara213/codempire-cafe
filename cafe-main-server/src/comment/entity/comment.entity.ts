import { Order } from 'src/order/entity/order.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('comment')
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public commentText: string;

  @Column({ type: 'int', nullable: false })
  public stars: number;

  @OneToOne(() => Order, (order) => order.comment)
  public order: Order;
}
