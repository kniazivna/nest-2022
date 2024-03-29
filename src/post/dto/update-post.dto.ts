import { IsBoolean, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostDto {
  @ApiProperty({ example: { title: 'Title' } })
  @IsString()
  @MinLength(2, {
    message: 'Title is too short',
  })
  @MaxLength(30, {
    message: 'Title is too long',
  })
  public title: string;

  @ApiProperty({ example: { content: 'Some text' } })
  @IsString()
  @MinLength(2, {
    message: 'Content is too short',
  })
  public content: string;
  // @IsBoolean() //якщо прописую цю валідацію, то не можу оновити тільки text? краще тоді не валідувати це поле?
  public published?: boolean;
}
