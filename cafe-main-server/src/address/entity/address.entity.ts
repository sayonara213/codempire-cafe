import { User } from 'src/user/entity/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('address')
export class Address {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public addressName: string;

  @Column({ type: 'boolean', default: false })
  public isActive: boolean;

  @ManyToOne(() => User, (user) => user.addresses)
  public user: User;
}
