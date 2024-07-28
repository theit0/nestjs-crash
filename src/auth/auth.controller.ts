import { Body, Controller, Get, Post, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthPayloadDto } from './dtos/auth.dto';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    @UseGuards(LocalGuard)
    login(@Body() authPayload: AuthPayloadDto) {
        const user = this.authService.validateUser(authPayload);
        return user;
    }

    @Get('status')
    @UseGuards(JwtAuthGuard)
    profile(@Req() req: Request) {
        console.log("inside controller status method")
        console.log(req.user)
    }
}
