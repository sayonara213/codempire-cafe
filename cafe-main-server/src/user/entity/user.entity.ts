import { Exclude } from 'class-transformer';
import { Address } from 'src/address/entity/address.entity';
import { Order } from 'src/order/entity/order.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public name: string;

  @Column({ type: 'varchar', length: 120 })
  public email: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public phone: string;

  @Column({ type: 'varchar', nullable: true })
  public image: string;

  @Column({ type: 'varchar', length: 120 })
  @Exclude()
  public password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  public role: UserRole;

  @Column({ type: 'boolean', default: false })
  @Exclude()
  public isDeleted: boolean;

  @CreateDateColumn({ type: 'timestamp', select: false })
  @Exclude()
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', select: false })
  @Exclude()
  public updatedAt: Date;

  @OneToMany(() => Address, (address) => address.user)
  public addresses: Address[];

  @OneToMany(() => Order, (order) => order.user)
  public orders: Order[];
}
