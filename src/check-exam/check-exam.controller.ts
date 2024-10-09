import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CheckExamService } from './check-exam.service';
import { CreateCheckExamDto } from './dto/create-check-exam.dto';
import { UpdateCheckExamDto } from './dto/update-check-exam.dto';

@Controller('check-exam')
export class CheckExamController {
  constructor(private readonly checkExamService: CheckExamService) {}

  @Post()
  create(@Body() createCheckExamDto: CreateCheckExamDto) {
    return this.checkExamService.create(createCheckExamDto);
  }

  @Get()
  findAll() {
    return this.checkExamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkExamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCheckExamDto: UpdateCheckExamDto) {
    return this.checkExamService.update(+id, updateCheckExamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkExamService.remove(+id);
  }
}
