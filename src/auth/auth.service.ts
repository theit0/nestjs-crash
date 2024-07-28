import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthPayloadDto } from './dtos/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/User.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<User>, private jwtService: JwtService) { }

    async validateUser({ username, password }: AuthPayloadDto): Promise<any> {
        const findUser = await this.userModel.findOne({ username });
        if (!findUser) {
            throw new UnauthorizedException('User not found');
        }
        if (findUser.password === password) {
            const { password, ...result } = findUser
            return this.jwtService.sign(result)
        }
    }
}
