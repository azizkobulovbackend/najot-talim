import { PartialType } from '@nestjs/mapped-types';
import { CreateCheckExamDto } from './create-check-exam.dto';

export class UpdateCheckExamDto extends PartialType(CreateCheckExamDto) {}
