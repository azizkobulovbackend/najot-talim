import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { Teacher } from './entities/teacher.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import {extname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const uploadDir = join(process.cwd(), 'src/teacher/uploads');
if(!existsSync(uploadDir)) {
  mkdirSync(uploadDir);
}

@Module({
  imports: [
    TypeOrmModule.forFeature([Teacher]),
    MulterModule.register({
      storage: diskStorage({
        destination: (req, file, cb) => {
          cb(null, uploadDir);
        },
        filename: (req, file, cb) => {
          const ext = extname(file.originalname);
          const filename = `${Date.now()}${ext}`;
          cb(null, filename);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
          cb(null, true);
        } else {
          cb(new Error('Only images are allowed...'), false);
        }
      },
    }),
  ],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
