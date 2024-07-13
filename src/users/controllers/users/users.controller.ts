import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {

    }

    @Get()
    getUsers() {
        return this.userService.fetchAllUsers();
    }

    @Post()
    createUser(@Body() userData: CreateUserDto) {
        console.log(userData)
        console.log(userData.username)
        console.log(userData.email)
        return {}
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        console.log(id)
        return { id };
    }

}
