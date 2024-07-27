import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from 'src/posts/dtos/CreatePost.dto';
import { Post } from 'src/schemas/Post.schema';
import { User } from 'src/schemas/User.schema';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class PostService {
    constructor(
        @InjectModel(Post.name) private postModel: Model<Post>,
        @InjectModel(User.name) private userModel: Model<User>
    ) { }


    async create(createPostDto: CreatePostDto) {
        try {
            const user = await this.userModel.findById(createPostDto.userId);
            if (!user) {
                throw new HttpException('User not found', HttpStatus.NOT_FOUND);
            }
            const createdPost = new this.postModel(createPostDto);
            await user.updateOne({ $push: { posts: createdPost._id } });
            return await createdPost.save();
        } catch (error) {
            throw new HttpException(`Error creating post: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async findAll() {
        return await this.postModel.find();
    }

    async findOne(id: string) {
        return await this.postModel.findById(id);
    }

}
