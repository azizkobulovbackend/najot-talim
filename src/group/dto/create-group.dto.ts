import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGroupDto {
  @IsNumber()
  @IsNotEmpty()
  group_number: Number;
  
  @IsString()
  course_id: string;
}
