import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('allergen')
export class Allergen {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public name: string;
}
