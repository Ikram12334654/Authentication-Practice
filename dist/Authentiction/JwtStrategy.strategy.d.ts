import { Strategy } from "passport-jwt";
import { User } from "src/user/entities/users.entity";
declare const startegyjwt_base: new (...args: any[]) => Strategy;
export declare class startegyjwt extends startegyjwt_base {
    constructor();
    validate(user: User): {
        email: string;
        sub: string;
        role: string;
        password: string;
        name: string;
    };
}
export {};
