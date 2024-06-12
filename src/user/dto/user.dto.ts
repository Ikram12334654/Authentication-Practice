import { IsEmail, IsOptional, IsString, isString } from "class-validator"

export class UserDto  {
 @IsString()
  name:string
  @IsEmail()
  email:string
  @IsString()
  password:string
  @IsString()
  @IsOptional()
  role:string
}
