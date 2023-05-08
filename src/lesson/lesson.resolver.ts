import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateLessonInput } from './create-lesson.input';
import { Lesson } from './lesson.entity';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver((of: any) => LessonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}

  @Query((returns) => LessonType)
  async lesson(@Args('id') id: string): Promise<Lesson> {
    return await this.lessonService.getLesson(id);
  }

  @Query((returns) => [LessonType])
  async lessons(): Promise<Lesson[]> {
    return await this.lessonService.getLessons();
  }

  @Mutation((returns) => LessonType)
  async createLesson(@Args('data') data: CreateLessonInput): Promise<Lesson> {
    return await this.lessonService.create(data);
  }
}
