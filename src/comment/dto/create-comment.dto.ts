import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateCommentDto {

  @ApiProperty({ example: { text: 'Some text' } })
  @IsString()
  @MinLength(2, {
    message: 'Text is too short',
  })
  @IsNotEmpty({
    message: 'This field is required',
  })
  public text: string;

  @ApiProperty({ example: { published: false } })
  // @IsBoolean() //якщо прописую цю валідацію, то не можу оновити тільки text? краще тоді не валідувати це поле?
  public published?: boolean | null;

  @ApiProperty({ example: { authorId: 5 } })
  @IsInt()

  public authorId?: number;

  @ApiProperty({ example: { postId: 11 } })
  @IsInt()
  public postId?: number;
}
