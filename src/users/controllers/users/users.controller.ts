import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers() {
        return { username: "Theo", email: "theopelegrina@gmail.com" }
    }

    @Post()
    createUser(@Body() userData: CreateUserDto) {
        console.log(userData)
        console.log(userData.username)
        console.log(userData.email)
        return {}
    }
}
