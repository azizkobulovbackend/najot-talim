import { Teacher } from 'src/teacher/entities/teacher.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'enum', enum: ['Programming', 'SMM', 'Design'] })
  category: string;

  @ManyToOne(() => Teacher, (teacher) => teacher.courses)
  teacher: Teacher;

  @CreateDateColumn()
  start_time: Date;

  @DeleteDateColumn()
  end_time: Date;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;
}
