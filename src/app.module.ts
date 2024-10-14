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
import { PaymentModule } from './payment/payment.module';
import { UserCourseModule } from './user_course/user_course.module';
import { ExamModule } from './exam/exam.module';
import { LessonModule } from './lesson/lesson.module';
import { HomeworkModule } from './homework/homework.module';
import { CheckExamModule } from './check-exam/check-exam.module';
import { CheckHomeworkModule } from './check-homework/check-homework.module';
import { AttendanceModule } from './attendance/attendance.module';
import { JwtModule } from '@nestjs/jwt';
import { Auth } from './auth/entities/auth.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'aziz1501',
      username: 'postgres',
      entities: [Course, Teacher, User, Group, Admin, Auth],
      database: 'najot',
      synchronize: true,
      logging: true,
    }),
    JwtModule.register({
      global: true,
      secret: 'Very Secret',
      signOptions: { expiresIn: '1h' },
    }),
    AdminModule,
    GroupModule,
    CourseModule,
    TeacherModule,
    UserModule,
    PaymentModule,
    UserCourseModule,
    ExamModule,
    LessonModule,
    HomeworkModule,
    CheckExamModule,
    CheckHomeworkModule,
    AttendanceModule,
    AuthModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
