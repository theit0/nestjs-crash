import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {

    private fakeUsers = [
        { username: "Theo", email: "theopelegrina@gmail.com" },
        { username: "Cristian", email: "cristianpelegrina@gmail.com" }
    ];

    fetchAllUsers() {
        return this.fakeUsers
    }

    createUser(userData: CreateUserType) {
        this.fakeUsers.push(userData)
        return {}
    }

    fetchUserById(id: number) {
        return { id: 1, username: "Theo", email: "theopelegrina@gmail.com" }
    }
}
