import { User } from '../user/entities/users.entity';
import { Repository } from 'typeorm';
import { UserDto } from '../user/dto/user.dto';
import { UserService } from 'src/user/user.service';
export declare class AdminService {
    private userRepository;
    private userService;
    constructor(userRepository: Repository<User>, userService: UserService);
    create(UserDto: UserDto): Promise<User>;
    findAll(): Promise<User[]>;
    Findone(email: string): Promise<User>;
    update(email: string, UserDto: UserDto): Promise<User>;
    remove(email: string): Promise<User[]>;
}
