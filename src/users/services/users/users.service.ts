import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private fakeUsers = [
        { username: "Theo", email: "theopelegrina@gmail.com" },
        { username: "Cristian", email: "cristianpelegrina@gmail.com" }
    ];

    fetchAllUsers() {
        return this.fakeUsers
    }
}
