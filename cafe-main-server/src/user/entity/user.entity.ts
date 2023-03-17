import { Exclude } from 'class-transformer';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
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

  @CreateDateColumn({ type: 'timestamp' })
  @Exclude()
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  @Exclude()
  public updatedAt: Date;
}
