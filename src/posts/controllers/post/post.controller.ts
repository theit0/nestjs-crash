import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePostDto } from 'src/posts/dtos/CreatePost.dto';
import { PostService } from 'src/posts/services/post/post.service';

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {

    }

    @Post()
    createPost(@Body() createPostDto: CreatePostDto) {
        return this.postService.create(createPostDto);
    }

    @Get()
    getPosts() {
        return this.postService.findAll();
    }

    @Get(':id')
    getPost(@Param('id') id: string) {
        return this.postService.findOne(id);
    }

}
