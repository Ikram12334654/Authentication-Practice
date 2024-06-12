import { UserDto } from './dto/user.dto';
import { User } from './entities/users.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(UserDto: UserDto): Promise<User>;
    findAll(): Promise<User[]>;
    Findone(email: string): Promise<User>;
    validateUser(email: string, password: string): Promise<User | string>;
}
