import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { Course } from './course/entities/course.entity';
import { Teacher } from './teacher/entities/teacher.entity';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'aziz1501',
    username: 'postgres',
    entities: [Course, Teacher],
    database: 'najot',
    synchronize: true,
    logging: true,
  }),
  CourseModule,
  TeacherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
