import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import mongoose from 'mongoose';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {

    }

    @Get()
    async getUsers() {
        try {
            const users = await this.userService.fetchAllUsers();
            return users;
        } catch (error) {
            throw new HttpException("Error fetching all users", HttpStatus.BAD_REQUEST);
        }
    }

    @Post()
    @UseGuards(AuthGuard)
    @UseGuards(JwtAuthGuard)
    createUser(@Body() userData: CreateUserDto) {
        try {
            return this.userService.createUser(userData)
        } catch (error) {
            throw new HttpException("Error creating user", HttpStatus.BAD_REQUEST);
        }

    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        try {
            const user = await this.userService.fetchUserById(id);
            return user;
        } catch (error) {
            throw new HttpException("User not found", HttpStatus.BAD_REQUEST);
        }
    }
    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() newUser: UpdateUserDto) {
        try {
            const isIdValid = mongoose.Types.ObjectId.isValid(id);
            if (!isIdValid) throw new Error()

            const updatedUser = await this.userService.updateUser(id, newUser);
            return updatedUser;
        } catch (error) {
            throw new HttpException("Error updating User", HttpStatus.BAD_REQUEST);
        }
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        try {
            return this.userService.deleteUser(id);
        } catch (error) {
            throw new HttpException("Error deleting User", HttpStatus.BAD_REQUEST);
        }
    }
}
