import { User } from 'src/user/entities/user.entity';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Group {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @OneToMany(() => User, (user) => user.group)
  users: User[];
}
