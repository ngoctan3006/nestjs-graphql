import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';

@Module({
  imports: [],
  providers: [LessonResolver],
})
export class LessonModule {}
