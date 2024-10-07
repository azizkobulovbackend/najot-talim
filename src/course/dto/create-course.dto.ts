import {  IsNotEmpty, IsString } from "class-validator";

enum CourseCategory {
    Programming = "Programming",
    SMM = "SMM",
    Design = "Design"
}

export class CreateCourseDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    category: CourseCategory

    @IsNotEmpty()
    teacherId: string;
    
}
