import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { CreateLessonArgs } from './create-lesson.args';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,
  ) {}

  async create(data: CreateLessonArgs): Promise<Lesson> {
    return await this.lessonRepository.save({ id: uuid(), ...data });
  }
}
