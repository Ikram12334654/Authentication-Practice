import { JwtService } from "@nestjs/jwt";
import { User } from "src/user/entities/users.entity";
export declare class authService {
    private Jwtservice;
    constructor(Jwtservice: JwtService);
    genrateToken(user: User): string;
}
