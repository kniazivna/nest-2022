//'dto - data transfer object';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: { name: 'user' } }) //в swagger чомусь всі поля обов'язковими позначає, можна це змінити?
  @IsString()
  @MinLength(2, {
    message: 'Name is too short',
  })
  @MaxLength(15, {
    message: 'Name is too long',
  })
  @IsNotEmpty({
    message: 'This field is required',
  })
  public name: string;

  @ApiProperty({ example: { email: 'user@gmail.com' } })
  @IsString()
  @IsEmail({
    message: 'Check your email address',
  })
  @IsNotEmpty({
    message: 'This field is required',
  })
  public email: string;

  @ApiProperty({ example: { age: 25 } })
  @IsNumber()
  @IsNotEmpty({
    message: 'This field is required',
  })
  public age: number;

  @ApiProperty({ example: { city: 'Lviv' } })
  @IsString()
  @MinLength(2, {
    message: 'City name is too short',
  })
  @MaxLength(20, {
    message: 'City name is too long',
  })
  public city?: string;

  @ApiProperty({ example: { password: 'useruser' } })
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
  readonly password: string;

  @ApiProperty({ example: { status: false } })
  @IsBoolean()
  @IsNotEmpty({
    message: 'This field is required',
  })
  public status: boolean;
}
