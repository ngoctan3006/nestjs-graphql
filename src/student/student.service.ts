import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async getStudent(id: string): Promise<Student> {
    return await this.studentRepository.findOne({
      where: { id },
    });
  }

  async getStudents(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  async create(data: CreateStudentInput): Promise<Student> {
    return await this.studentRepository.save({
      id: uuid(),
      ...data,
    });
  }
}
