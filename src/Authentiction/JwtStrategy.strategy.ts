import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt"
import { User } from "src/user/entities/users.entity";

export class startegyjwt extends PassportStrategy(Strategy){

    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'key',
          });
    }
    validate(user:User){
        const payload={ email: user.email, sub: user.id, role: user.role , password:user.password, name:user.name}
        return payload;
    }
}