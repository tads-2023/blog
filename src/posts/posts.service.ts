import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { DeleteResult, Repository } from 'typeorm';
import { PostDto } from './dto/post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  getPosts(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  createPost(post: PostDto): Promise<Post> {
    const novoPost = new Post()
    novoPost.autor = post.autor;
    novoPost.conteudo = post.conteudo;
    novoPost.dataPublicacao = post.dataPublicacao;
    novoPost.isActive = post.isActive;

    return this.postsRepository.save(novoPost);
  }

  getPost(id: number): Promise<Post> {
    return this.postsRepository.findOneBy({id: id});
  }

  async editPost(id: number, post: PostDto): Promise<Post> {
    const postAtualizar = await this.postsRepository.findOneBy({id: id});
    postAtualizar.autor = post.autor;
    postAtualizar.conteudo = post.conteudo;
    postAtualizar.dataPublicacao = post.dataPublicacao;
    postAtualizar.isActive = post.isActive;

    return this.postsRepository.save(postAtualizar);
  }

  deletePost(id: number): Promise<DeleteResult> {
    return this.postsRepository.delete(id);
  }
}
