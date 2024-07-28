import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local'
import { AuthService } from "../auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super()
    }
    validate(username: string, pass: string): Promise<any> {
        const user = this.authService.validateUser({ username, pass })
        if (!user) {
            throw new UnauthorizedException()
        }
        return user
    }
}