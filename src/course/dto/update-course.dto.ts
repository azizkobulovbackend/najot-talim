import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateCourseDto } from './create-course.dto';
enum CourseCategory {
    Programming = "Programming",
    SMM = "SMM",
    Design = "Design"
}

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    category: CourseCategory

    @IsNotEmpty()
    teacherId: string;
}
