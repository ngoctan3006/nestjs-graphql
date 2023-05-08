import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of: any) => StudentType)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Mutation((returns) => StudentType)
  async createStudent(
    @Args('data') data: CreateStudentInput,
  ): Promise<Student> {
    return await this.studentService.create(data);
  }
}
