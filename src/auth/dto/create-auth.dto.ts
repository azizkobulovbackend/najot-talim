import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsPhoneNumber, IsString, Matches } from 'class-validator';

enum Sex {
  male= 'male',
  female= 'female'
}

export class CreateAuthDto {
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsNotEmpty()
  login: string;

  @IsNotEmpty()
  @IsPhoneNumber('UZ')
  phone: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsString()
  group_id: string;

  @IsEnum(Sex)
  sex: Sex
}
