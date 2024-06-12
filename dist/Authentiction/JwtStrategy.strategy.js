"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startegyjwt = void 0;
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
class startegyjwt extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'key',
        });
    }
    validate(user) {
        const payload = { email: user.email, sub: user.id, role: user.role, password: user.password, name: user.name };
        return payload;
    }
}
exports.startegyjwt = startegyjwt;
//# sourceMappingURL=JwtStrategy.strategy.js.map