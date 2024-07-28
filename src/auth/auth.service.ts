import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthPayloadDto } from './dtos/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/User.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<User>, private jwtService: JwtService) { }

    async validateUser({ username, pass }: AuthPayloadDto): Promise<any> {
        const findUser = await this.userModel.findOne({ username });
        if (!findUser) {
            throw new UnauthorizedException('User not found');
        } else {
            const matched = await comparePassword(pass, findUser.password);
            if (!matched) {
                throw new UnauthorizedException('Password is incorrect');
            }
            const { password, ...result } = findUser
            return this.jwtService.sign(result)
        }
    }
}
