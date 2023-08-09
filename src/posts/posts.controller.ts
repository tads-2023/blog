import { Controller, Get, Post, Param, Put, Delete, Body } from '@nestjs/common';
import { PostDto } from './dto/post.dto';
import { Post as PostEntity } from './post.entity';
import { PostService } from './posts.service';
import { DeleteResult } from 'typeorm';


@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostService) {}

  @Get('')
  getPosts(): Promise<PostEntity[]> {
    return this.postService.getPosts();
  }

  @Post('')
  createPost(@Body() post: PostDto): Promise<PostEntity> {
    return this.postService.createPost(post);
  }

  @Get(':id')
  getPost(@Param('id') id: number): Promise<PostEntity> {
    return this.postService.getPost(id);
  }

  @Put(':id')
  editPost(
      @Param('id') id: number,
      @Body() post: PostDto
    ): Promise<PostEntity> {
    return this.postService.editPost(id, post);
  }

  @Delete(':id')
  deletePost(@Param('id') id: number): Promise<DeleteResult> {
    return this.postService.deletePost(id);
  }
}