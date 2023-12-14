import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Matches, MaxLength } from 'class-validator';

export class SignupReqDto {
  @ApiProperty({ example: 'fastcampus@gmail.com', required: true })
  @MaxLength(30)
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Password1!', required: true })
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{10,30}$/)
  password: string;

  @ApiProperty({ example: 'Password1!', required: true })
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{10,30}$/)
  passwordConfirm: string;
}

export class SigninReqDto {
  @ApiProperty({ example: 'fastcampus@gmail.com', required: true })
  @MaxLength(30)
  email: string;

  @ApiProperty({ example: 'Password1!', required: true })
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{10,30}$/)
  password: string;
}
