import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('books')
export class Book {
  @ApiProperty({ description: '책 ID', example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: '책 이름', example: '클린 코드', maxLength: 255 })
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ApiProperty({ description: '카테고리', example: 'IT/프로그래밍', maxLength: 100 })
  @Column({ type: 'varchar', length: 100 })
  category: string;

  @ApiProperty({ description: '재고 수량', example: 10, minimum: 0, default: 0 })
  @Column({ type: 'int', default: 0 })
  quantity: number;

  @ApiProperty({ description: '가격', example: 29000, minimum: 0 })
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @ApiProperty({
    description: '이미지 URL',
    example: 'https://example.com/image.jpg',
    required: false,
    maxLength: 500,
  })
  @Column({ type: 'varchar', length: 500, nullable: true })
  imgurl: string;

  @ApiProperty({ description: '생성일시' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: '수정일시' })
  @UpdateDateColumn()
  updatedAt: Date;
}
