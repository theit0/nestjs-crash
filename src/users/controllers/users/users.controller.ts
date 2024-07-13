import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(@Query('sortAsc', ParseBoolPipe) sortAsc: boolean) {
        console.log(sortAsc)
        return { username: "Theo", email: "theopelegrina@gmail.com" }
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
