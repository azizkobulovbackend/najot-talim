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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'avaz1514',
      username: 'postgres',
      entities: [Course, Teacher],
      database: 'najot',
      synchronize: true,
      logging: true,
    }),
    CourseModule,
    TeacherModule,
    GroupModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
