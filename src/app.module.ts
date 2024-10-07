import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { Course } from './course/entities/course.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'aziz1501',
    username: 'postgres',
    entities: [Course],
    database: 'najot',
    synchronize: true,
    logging: true,
  }),
  CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
