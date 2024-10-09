import { Injectable } from '@nestjs/common';
import { CreateCheckExamDto } from './dto/create-check-exam.dto';
import { UpdateCheckExamDto } from './dto/update-check-exam.dto';

@Injectable()
export class CheckExamService {
  create(createCheckExamDto: CreateCheckExamDto) {
    return 'This action adds a new checkExam';
  }

  findAll() {
    return `This action returns all checkExam`;
  }

  findOne(id: number) {
    return `This action returns a #${id} checkExam`;
  }

  update(id: number, updateCheckExamDto: UpdateCheckExamDto) {
    return `This action updates a #${id} checkExam`;
  }

  remove(id: number) {
    return `This action removes a #${id} checkExam`;
  }
}
