import { AdminService } from './admin.service';
import { UserDto } from '../user/dto/user.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(UserDto: UserDto): Promise<import("../user/entities/users.entity").User>;
    findAll(): Promise<import("../user/entities/users.entity").User[]>;
    findOne(email: string): Promise<import("../user/entities/users.entity").User>;
    update(email: string, UserDto: UserDto): Promise<import("../user/entities/users.entity").User>;
    remove(email: string): Promise<import("../user/entities/users.entity").User[]>;
}
