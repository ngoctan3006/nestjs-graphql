import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((of: any) => LessonType)
export class LessonResolver {
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: '1',
      name: 'Toan',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
