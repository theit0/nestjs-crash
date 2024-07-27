import { Module } from '@nestjs/common';
import { PostController } from './controllers/post/post.controller';
import { PostService } from './services/post/post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from 'src/schemas/Post.schema';
import { User, UserSchema } from 'src/schemas/User.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }, { name: User.name, schema: UserSchema }])],
    controllers: [PostController],
    providers: [PostService]
})
export class PostsModule { }
