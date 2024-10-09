import { Module } from '@nestjs/common';
import { CheckHomeworkService } from './check-homework.service';
import { CheckHomeworkController } from './check-homework.controller';

@Module({
  controllers: [CheckHomeworkController],
  providers: [CheckHomeworkService],
})
export class CheckHomeworkModule {}
