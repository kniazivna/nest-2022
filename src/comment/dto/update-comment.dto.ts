import { IsBoolean, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCommentDto {
  @ApiProperty({ example: { text: 'Some text' } })
  @IsString()
  @MinLength(2, {
    message: 'Text is too short',
  })
  public text: string;

  @ApiProperty({ example: { published: false } })
  // @IsBoolean() //якщо прописую цю валідацію, то не можу оновити тільки text? краще тоді не валідувати це поле?
  public published?: boolean | null;
}
