import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { Post } from './post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostService } from './posts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostsController],
  providers: [PostService],
})
export class PostsModule {}