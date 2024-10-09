import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { Course } from './course/entities/course.entity';
import { Teacher } from './teacher/entities/teacher.entity';
import { TeacherModule } from './teacher/teacher.module';
import { GroupModule } from './group/group.module';
import { AdminModule } from './admin/admin.module';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { Group } from './group/entities/group.entity';
import { Admin } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'aziz1501',
    username: 'postgres',
    entities: [Course, Teacher, User, Group, Admin],
    database: 'najot',
    synchronize: true,
    logging: true,
  }),
  AdminModule,
  GroupModule,
  CourseModule,
  TeacherModule,
  UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
