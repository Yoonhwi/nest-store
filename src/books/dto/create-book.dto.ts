import {
  IsString,
  IsNumber,
  IsOptional,
  IsNotEmpty,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({
    description: '책 이름',
    example: '클린 코드',
    maxLength: 255,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: '카테고리',
    example: 'IT/프로그래밍',
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty({
    description: '재고 수량',
    example: 10,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  quantity: number;

  @ApiProperty({
    description: '가격',
    example: 29000,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({
    description: '이미지 URL',
    example: 'https://example.com/image.jpg',
    required: false,
    maxLength: 500,
  })
  @IsString()
  @IsOptional()
  imgurl?: string;
}
