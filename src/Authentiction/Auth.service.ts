import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/user/entities/users.entity";
@Injectable()
export class authService {
constructor(private Jwtservice:JwtService){}
genrateToken(user:User):string{
 const payload={ email: user.email, sub: user.id, role: user.role , password:user.password, name:user.name}
    return this.Jwtservice.sign(payload);

}
}