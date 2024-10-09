import { Module } from '@nestjs/common';
import { CheckExamService } from './check-exam.service';
import { CheckExamController } from './check-exam.controller';

@Module({
  controllers: [CheckExamController],
  providers: [CheckExamService],
})
export class CheckExamModule {}
