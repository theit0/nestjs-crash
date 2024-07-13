import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(@Query('sortBy') sortBy: string) {
        console.log(sortBy)
        return { username: "Theo", email: "theopelegrina@gmail.com" }
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: CreateUserDto) {
        console.log(userData)
        console.log(userData.username)
        console.log(userData.email)
        return {}
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        console.log(id)
        return { id };
    }

}
