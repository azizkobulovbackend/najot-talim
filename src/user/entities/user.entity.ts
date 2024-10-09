import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true })
  login: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar' })
  phone: string;

  @Column({ type: 'varchar' })
  photo: string;

  @Column({ name: 'group_id' })
  group_id: string;

  //   @ManyToOne(() => Group, group => group.users)
  //   group: Group

  @Column({ name: 'birth_date' })
  birth_date: Date;

  @Column({ type: 'enum', enum: ['male', 'female', 'other'] })
  sex: string;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @Column({ type: 'boolean', default: false })
  is_admin: boolean;

  @Column({ name: 'xp' })
  xp: number;

  @Column({ name: 'silver' })
  silver: number;

  @CreateDateColumn()
  start_time: Date;

  @DeleteDateColumn()
  end_time: Date;
}
