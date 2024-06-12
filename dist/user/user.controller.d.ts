import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: UserDto): Promise<import("./entities/users.entity").User>;
    findall(): Promise<import("./entities/users.entity").User[]>;
    Findone(email: string): Promise<import("./entities/users.entity").User>;
}
