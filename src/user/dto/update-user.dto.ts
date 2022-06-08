import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ example: { name: 'user' } })
  @IsString()
  @MinLength(2, {
    message: 'Name is too short',
  })
  @MaxLength(15, {
    message: 'Name is too long',
  })
  public name: string;

  @ApiProperty({ example: { age: 25 } })
  @IsNumber()
  public age: number;

  @ApiProperty({ example: { city: 'Lviv' } })
  @IsString()
  @MinLength(2, {
    message: 'Name is too short',
  })
  @MaxLength(20, {
    message: 'Name is too long',
  })
  public city?: string;
}
