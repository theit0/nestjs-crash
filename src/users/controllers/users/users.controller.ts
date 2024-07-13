import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
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
        return this.userService.createUser(userData)
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const user = this.userService.fetchUserById(id);
        if (!user)
            throw new HttpException("User not found", HttpStatus.BAD_REQUEST);
        return user
    }

}
