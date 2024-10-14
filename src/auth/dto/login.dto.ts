import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class LoginDto {
  @IsNotEmpty()
  login: string;

  @IsNotEmpty()
  password: string;
}
