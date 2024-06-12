import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository:Repository<User> ){}
   async create(UserDto: UserDto):Promise<User> {
    let user:User=new User();
    user.name=UserDto.name
    user.email=UserDto.email
    user.role=UserDto.role
    let hash= await bcrypt.hash( UserDto.password,10);
    user.password=hash
      return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }
  Findone(email:string){
   return this.userRepository.findOne({ where: { email } });
  }
 
  async validateUser(email: string, password: string): Promise<User | string> {

    const user = await this.userRepository.findOne({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return "password is incorrect";
  }


}
