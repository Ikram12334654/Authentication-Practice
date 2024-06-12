import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/users.entity';
import { Repository } from 'typeorm';
import { UserDto } from '../user/dto/user.dto';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';


@Injectable()
export class AdminService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>,private userService:UserService ){}
  async create(UserDto: UserDto):Promise<User> {
   let user:User=new User();
   user.name=UserDto.name
   user.email=UserDto.email
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

  async update(email:string ,UserDto: UserDto):Promise<User>{
    let user=await this.Findone(email);
   user.name=UserDto.name
   user.email=UserDto.email
   let hash= await bcrypt.hash( UserDto.password,10);
   user.password=hash
     return this.userRepository.save(user);
  }
   async remove(email:string):Promise<User[]>{
  let user =await this.Findone(email);
   await this.userRepository.delete(user.id);
    return this.userRepository.find();


    
   }

}
