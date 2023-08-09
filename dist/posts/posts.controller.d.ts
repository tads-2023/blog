import { PostDto } from './dto/post.dto';
import { Post as PostEntity } from './post.entity';
import { PostService } from './posts.service';
import { DeleteResult } from 'typeorm';
export declare class PostsController {
    private readonly postService;
    constructor(postService: PostService);
    getPosts(): Promise<PostEntity[]>;
    createPost(post: PostDto): Promise<PostEntity>;
    getPost(id: number): Promise<PostEntity>;
    editPost(id: number, post: PostDto): Promise<PostEntity>;
    deletePost(id: number): Promise<DeleteResult>;
}
