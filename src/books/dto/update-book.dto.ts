import { IsString, IsNumber, IsOptional, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateBookDto {
  @ApiPropertyOptional({
    description: '책 이름',
    example: '클린 코드',
    maxLength: 255,
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    description: '카테고리',
    example: 'IT/프로그래밍',
    maxLength: 100,
  })
  @IsString()
  @IsOptional()
  category?: string;

  @ApiPropertyOptional({
    description: '재고 수량',
    example: 10,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  @IsOptional()
  quantity?: number;

  @ApiPropertyOptional({
    description: '가격',
    example: 29000,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  @IsOptional()
  price?: number;

  @ApiPropertyOptional({
    description: '이미지 URL',
    example: 'https://example.com/image.jpg',
    maxLength: 500,
  })
  @IsString()
  @IsOptional()
  imgurl?: string;
}
