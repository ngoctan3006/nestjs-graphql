import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateLessonArgs {
  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;
}
