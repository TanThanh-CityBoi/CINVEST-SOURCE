import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from '../categories/categories.module';
import { HashtagsModule } from '../hashtags/hashtags.module';
import { UserModule } from '../profiles/user/module';
import { SubjectsModule } from '../subjects/subjects.module';
import { PostEntity } from './entities/post.entity';
import { PostsServiceGRPC } from './posts.grpc';
import { PostsService } from './posts.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity]),
    HashtagsModule,
    UserModule,
    CategoriesModule,
    SubjectsModule,
  ],
  controllers: [PostsServiceGRPC],
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsModule {}
