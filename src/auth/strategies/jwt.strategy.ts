import { Injectable } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'd1fe95feee3a757762855d88c077d7e13fb9b7baff35e54491727740f478e1ec',
        })
    }

    validate(payload: any) {
        const { _doc } = payload
        return _doc
    }
}