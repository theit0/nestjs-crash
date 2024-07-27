import { Delete, Get, Injectable, Post, Put } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Settings } from 'src/schemas/Settings.schema';
import { User } from 'src/schemas/User.schema';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';


@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<User>, @InjectModel(Settings.name) private settingsModel: Model<Settings>) {

    }

    @Get()
    fetchAllUsers() {
        return this.userModel.find();
    }

    @Get()
    fetchUserById(id: string) {
        return this.userModel.findById(id).populate('settings');
    }

    @Post()
    async createUser({ settings, ...userData }: CreateUserDto) {
        if (settings) {
            const newSettings = new this.settingsModel(settings)
            await newSettings.save();
            const newUser = new this.userModel({
                ...userData,
                settings: newSettings._id
            })
            return newUser.save();
        }
        const newUser = new this.userModel(userData)
        return newUser.save();
    }

    @Put()
    updateUser(id: string, newUser: UpdateUserDto) {
        const updatedUser = this.userModel.findByIdAndUpdate(id, newUser, { new: true });
        return updatedUser
    }


    @Delete()
    deleteUser(id: string) {
        return this.userModel.findByIdAndDelete(id);
    }
}
