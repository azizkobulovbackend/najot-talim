import {
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  Inject,
  Request,
  Res,
  Response,
} from '@nestjs/common';
import { createClient } from 'redis';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  private client = createClient({ url: 'redis://localhost:6379' });
  constructor(
    @InjectRepository(Course)
    private readonly CourseRepository: Repository<Course>,
    @InjectRepository(Teacher)
    private readonly TeacherRepository: Repository<Teacher>,
  ) {
    this.client.connect().catch(console.error);
  }

  async createCourse(createCourseDto: CreateCourseDto): Promise<Course | any> {
    let { name, category, teacher_id } = createCourseDto;
    let findTeacher = await this.TeacherRepository.findOne({
      where: { id: teacher_id },
    });
    if (!findTeacher)
      return new HttpException('Teacher not found', HttpStatus.NOT_FOUND);
    const newCourse = await this.CourseRepository.create({name, category, teacher: findTeacher});
    return this.CourseRepository.save(newCourse);
  }

  async findAll(): Promise<Course[]> {
    let courses = await this.CourseRepository.find({relations: {teacher: true}});
    let cached = await this.client.get('courses');
    if (cached) {
      return JSON.parse(cached);
    } else {
      await this.client.setEx('courses', 60, JSON.stringify(courses));
      return courses
    }
  }

  async findOne(id: any): Promise<Course | any> {
    let findCourse = await this.CourseRepository.findOneBy({ id });
    if (!findCourse)
      return new HttpException('Course not found', HttpStatus.NOT_FOUND);
    let cached = await this.client.get('course');
    if (cached) {
      return JSON.parse(cached);
    } else {
      await this.client.setEx('course', 60, JSON.stringify(findCourse));
      return findCourse
    }
  }

  async update(id: any, updateCourseDto: UpdateCourseDto): Promise<any> {
    let findCourse = await this.CourseRepository.findOneBy({ id });
    if (!findCourse)
      return new HttpException('Course not found', HttpStatus.NOT_FOUND);
    await this.CourseRepository.update({ id }, { ...updateCourseDto });
  }

  async remove(id: any) {
    let findCourse = await this.CourseRepository.findOneBy({ id });
    if (!findCourse)
      return new HttpException('Course not found', HttpStatus.NOT_FOUND);
    return this.CourseRepository.delete(id);
  }
}
