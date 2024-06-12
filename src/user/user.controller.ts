import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import {UserDto } from './dto/user.dto';
import { emit } from 'process';
import { AuthGuard } from '@nestjs/passport';
import { roleGuard } from 'src/Authentiction/Role.guard';


@Controller('user')

export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: UserDto) {
    return this.userService.create(createUserDto);
  }

 
@Get()
@UseGuards(AuthGuard('jwt'),new roleGuard("user"))
findall(){
  return this.userService.findAll();
}
 @Get("/email")
 @UseGuards(AuthGuard('jwt'),new roleGuard("user"))
 Findone(@Body("email")email:string){
return this.userService.Findone(email)
 }

}
