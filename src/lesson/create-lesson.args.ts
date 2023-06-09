import { ArgsType, Field } from '@nestjs/graphql';
import { IsDateString, MinLength } from 'class-validator';

@ArgsType()
export class CreateLessonArgs {
  @MinLength(1)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @Field()
  endDate: string;
}
