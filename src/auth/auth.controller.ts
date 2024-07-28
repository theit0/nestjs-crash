import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthPayloadDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    login(@Body() authPayload: AuthPayloadDto) {
        const user = this.authService.validateUser(authPayload);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }
        return user;
    }
}
