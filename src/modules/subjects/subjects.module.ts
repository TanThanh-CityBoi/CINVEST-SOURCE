import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectEntity } from './entities/subject.entity';
import { SubjectsServiceGrpc } from './subjects.grpc';
import { SubjectsService } from './subjects.service';

@Module({
  imports: [TypeOrmModule.forFeature([SubjectEntity])],
  controllers: [SubjectsServiceGrpc],
  providers: [SubjectsService],
  exports: [SubjectsService],
})
export class SubjectsModule {}
