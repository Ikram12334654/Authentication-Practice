import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { UserDto } from '../user/dto/user.dto';
import { AuthGuard } from '@nestjs/passport';
import { roleGuard } from 'src/Authentiction/Role.guard';


@Controller('admin')
@UseGuards(AuthGuard('jwt'),new roleGuard("admin"))
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  create(@Body() UserDto: UserDto) {
    return this.adminService.create(UserDto);
  }

  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.adminService.Findone(email);
  }

  @Patch(':email')
  update(@Param('email') email: string, @Body() UserDto: UserDto) {
    return this.adminService.update(email, UserDto);
  }

  
  @Delete(':email')
  remove(@Param('email') email: string) {
    return this.adminService.remove(email);
  }
}
