"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const Auth_service_1 = require("./Auth.service");
const local_strateygy_1 = require("./local.strateygy");
const user_module_1 = require("../user/user.module");
const jwt_1 = require("@nestjs/jwt");
const JwtStrategy_strategy_1 = require("./JwtStrategy.strategy");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: 'key',
                signOptions: { expiresIn: '60s' }
            })
        ],
        providers: [local_strateygy_1.LocalStrategy, Auth_service_1.authService, JwtStrategy_strategy_1.startegyjwt],
        exports: [Auth_service_1.authService]
    })
], AuthModule);
//# sourceMappingURL=authmodule.module.js.map