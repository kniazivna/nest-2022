import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
  @ApiProperty({ example: { title: 'Title' } })
  @IsString()
  @MinLength(2, {
    message: 'Title is too short',
  })
  @MaxLength(30, {
    message: 'Title is too long',
  })
  @IsNotEmpty({
    message: 'This field is required',
  })

  public title: string;

  @ApiProperty({ example: { content: 'Some text' } })
  @IsString()
  @MinLength(2, {
    message: 'Content is too short',
  })
  @IsNotEmpty({
    message: 'This field is required',
  })

  public content: string;

  // @IsBoolean() //якщо прописую цю валідацію, то не можу оновити тільки text? краще тоді не валідувати це поле?
  public published?: boolean | null;
  @IsInt()
  public authorId?: number;
}
