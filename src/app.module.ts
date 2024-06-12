import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './user/entities/users.entity';
import { AuthModule } from './Authentiction/authmodule.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [UserModule,AuthModule,
    TypeOrmModule.forRootAsync({
     imports:[ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:'local.env'
     }),
    ],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get('HOST'),
      port: configService.get<number>('PORT'),
      username: configService.get<string>('DB_USERNAME'),
      password: configService.get<string>('DB_PASSWORD'),
      database: configService.get('DATABASE'),
      entities: [User],
      synchronize: true,
    }),
    inject:[ConfigService]
  }),
    AdminModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}