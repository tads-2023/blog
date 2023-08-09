import { Post } from './post.entity';
import { DeleteResult, Repository } from 'typeorm';
import { PostDto } from './dto/post.dto';
export declare class PostService {
    private postsRepository;
    constructor(postsRepository: Repository<Post>);
    getPosts(): Promise<Post[]>;
    createPost(post: PostDto): Promise<Post>;
    getPost(id: number): Promise<Post>;
    editPost(id: number, post: PostDto): Promise<Post>;
    deletePost(id: number): Promise<DeleteResult>;
}
