import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { authService } from './Auth.service';
import { LocalStrategy } from './local.strateygy';

import { UserModule } from '../user/user.module';  // Import UserModule
import { JwtModule } from '@nestjs/jwt';
import { startegyjwt } from './JwtStrategy.strategy';



@Module({
  imports: [
    UserModule, 
    PassportModule,
    JwtModule.register({
      secret:'key',
      signOptions:{expiresIn:'60s'}
    })
  ],
  providers: [ LocalStrategy,authService,startegyjwt],
  exports:[authService]
})
export class AuthModule {}
