import { IsNotEmpty, IsString, IsEnum, IsArray } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  fullname: string;

  @IsNotEmpty()
  @IsString()
  login: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  photo: any;

  @IsNotEmpty()
  @IsString()
  group_id: string;

  @IsNotEmpty()
  @IsString()
  birth_date: string;
}
