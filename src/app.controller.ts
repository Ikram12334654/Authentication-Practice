import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { authService } from './Authentiction/Auth.service';

@Controller('main')

export class AppController {
  constructor(private readonly appService: AppService,private readonly authservice:authService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req) {
    return this.authservice.genrateToken(req.user);
  }
}
