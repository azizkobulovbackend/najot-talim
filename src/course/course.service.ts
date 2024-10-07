import { Body, Injectable, Request, Res, Response } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly CourseRepository: Repository<Course>,
  ) {}

  async createCourse(createCourseDto: CreateCourseDto): Promise<Course> {
    let { name, category, teacher_id } = createCourseDto;
    let newCourse = await  this.CourseRepository.create(createCourseDto)
    return this.CourseRepository.save(newCourse);
  }

  findAll(): Promise<Course[]> {
    return this.CourseRepository.find();
  }

  findOne(id: any): any {
    let findCourse = this.CourseRepository.findOneBy({ id });
    if (!findCourse) return 'No courses found';
    return findCourse;
  }

  update(id: any, updateCourseDto: UpdateCourseDto): any {
    let { name, category, teacherId } = updateCourseDto;
    let findCourse = this.CourseRepository.findOneBy({ id });
    if (!findCourse) return 'No courses found';
    return this.CourseRepository.update(id, {
      name,
      category,
      teacher_id: teacherId,
    });
  }

  remove(id: any) {
    return this.CourseRepository.delete(id)
  }
}
