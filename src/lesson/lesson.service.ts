import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './create-lesson.input';
import { Lesson } from './lesson.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,
  ) {}

  async getLesson(id: string): Promise<Lesson> {
    return await this.lessonRepository.findOne({ where: { id } });
  }

  async create(data: CreateLessonInput): Promise<Lesson> {
    return await this.lessonRepository.save({ id: uuid(), ...data });
  }
}
