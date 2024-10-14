import { Group } from 'src/group/entities/group.entity';
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

  @Column({type: 'varchar'})
  fullname: string;

  @Column({ type: 'varchar', unique: true })
  login: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar', unique: true })
  phone: string;

  @Column({ type: 'varchar' })
  photo: string;

  @ManyToOne(() => Group, (group) => group.users)
  group: Group;


  @Column({ type: 'enum', enum: ['male', 'female', 'other'] })
  sex: string;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @Column({ type: 'boolean', default: false })
  is_admin: boolean;

  @Column({ name: 'xp', default: 0 })
  xp: number;

  @Column({ name: 'silver', default: 0 })
  silver: number;

  @CreateDateColumn()
  start_time: Date;

  @DeleteDateColumn()
  end_time: Date;
}
