import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';


@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModule: Model<User>) {

    }

    private fakeUsers = [
        { username: "Theo", email: "theopelegrina@gmail.com" },
        { username: "Cristian", email: "cristianpelegrina@gmail.com" }
    ];

    fetchAllUsers() {
        return this.fakeUsers
    }

    createUser(userData: CreateUserDto) {
        this.fakeUsers.push(userData)
        return {}
    }

    fetchUserById(id: number) {
        return { id: 1, username: "Theo", email: "theopelegrina@gmail.com" }
    }
}
