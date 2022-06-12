import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AuthUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'email' })
  @IsString()
  @IsEmail({
    message: 'Check your email address',
  })
  @IsNotEmpty({
    message: 'This field is required',
  })
  public email: string;

  @ApiProperty({ example: 'useruser', description: 'password' })
  @IsString()
  @MinLength(2, {
    message: 'Password is too short',
  })
  @MaxLength(10, {
    message: 'Password is too long',
  })
  @IsNotEmpty({
    message: 'This field is required',
  })
  password: string;
}
