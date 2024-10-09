import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupDto } from './create-group.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {
    @IsNumber()
    group_number: Number;
    
    @IsString()
    course_id: string;
}
