import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';


@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {

    }


    fetchAllUsers() {
        return
    }

    createUser(userData: CreateUserDto) {
        const newUser = new this.userModel(userData)
        return newUser.save();
    }

    fetchUserById(id: number) {
        return { id: 1, username: "Theo", email: "theopelegrina@gmail.com" }
    }
}
