import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ example: { name: 'user' } })
  @IsString()
  @IsOptional()
  @MinLength(2, {
    message: 'Name is too short',
  })
  @MaxLength(15, {
    message: 'Name is too long',
  })
  public name: string;

  @ApiProperty({ example: { age: 25 } })
  @IsNumber()
  @IsOptional()
  public age: number;

  @IsString()
  @IsOptional()
  public avatar: string;

  @ApiProperty({ example: { city: 'Lviv' } })
  @IsString()
  @IsOptional()
  @MinLength(2, {
    message: 'Name is too short',
  })
  @MaxLength(20, {
    message: 'Name is too long',
  })
  public city?: string;
}
