import { Body, HttpException, HttpStatus, Injectable, Request, Res, Response } from '@nestjs/common';
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
    let newCourse = await this.CourseRepository.create(createCourseDto)
    return this.CourseRepository.save(newCourse);
  }

  findAll(): Promise<Course[]> {
    return this.CourseRepository.find();
  }

  async findOne(id: any): Promise<Course | any> {
    let findCourse = await this.CourseRepository.findOneBy({ id });

    if (!findCourse) return new HttpException('Course not found', HttpStatus.NOT_FOUND) 
    return findCourse;
  }

  async update(id: any, updateCourseDto: UpdateCourseDto): Promise<any> {
    let findCourse = await this.CourseRepository.findOneBy({ id });
    if (!findCourse) return new HttpException('Course not found', HttpStatus.NOT_FOUND) 
    await this.CourseRepository.update({id},{...updateCourseDto});
    
  }

  async remove(id: any) {
    let findCourse = await this.CourseRepository.findOneBy({ id });
    if (!findCourse) return new HttpException('Course not found', HttpStatus.NOT_FOUND) 
    return this.CourseRepository.delete(id);
  }
}
