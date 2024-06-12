"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../user/entities/users.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const user_service_1 = require("../user/user.service");
let AdminService = class AdminService {
    constructor(userRepository, userService) {
        this.userRepository = userRepository;
        this.userService = userService;
    }
    async create(UserDto) {
        let user = new users_entity_1.User();
        user.name = UserDto.name;
        user.email = UserDto.email;
        let hash = await bcrypt.hash(UserDto.password, 10);
        user.password = hash;
        return this.userRepository.save(user);
    }
    findAll() {
        return this.userRepository.find();
    }
    Findone(email) {
        return this.userRepository.findOne({ where: { email } });
    }
    async update(email, UserDto) {
        let user = await this.Findone(email);
        user.name = UserDto.name;
        user.email = UserDto.email;
        let hash = await bcrypt.hash(UserDto.password, 10);
        user.password = hash;
        return this.userRepository.save(user);
    }
    async remove(email) {
        let user = await this.Findone(email);
        await this.userRepository.delete(user.id);
        return this.userRepository.find();
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository, user_service_1.UserService])
], AdminService);
//# sourceMappingURL=admin.service.js.map