import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './book.entity';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiOperation({
    summary: '새 책 생성',
    description: '새로운 책을 등록합니다.',
  })
  @ApiResponse({
    status: 201,
    description: '책이 성공적으로 생성되었습니다.',
    type: Book,
  })
  @ApiResponse({ status: 400, description: '잘못된 요청 데이터입니다.' })
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @ApiOperation({
    summary: '모든 책 조회',
    description: '등록된 모든 책을 조회합니다.',
  })
  @ApiResponse({
    status: 200,
    description: '책 목록 조회 성공',
    type: [Book],
  })
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: '특정 책 조회',
    description: 'ID로 특정 책을 조회합니다.',
  })
  @ApiParam({ name: 'id', description: '책 ID', type: Number })
  @ApiResponse({
    status: 200,
    description: '책 조회 성공',
    type: Book,
  })
  @ApiResponse({ status: 404, description: '책을 찾을 수 없습니다.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: '책 정보 수정',
    description: '기존 책의 정보를 수정합니다.',
  })
  @ApiParam({ name: 'id', description: '책 ID', type: Number })
  @ApiResponse({
    status: 200,
    description: '책 정보가 성공적으로 수정되었습니다.',
    type: Book,
  })
  @ApiResponse({ status: 404, description: '책을 찾을 수 없습니다.' })
  @ApiResponse({ status: 400, description: '잘못된 요청 데이터입니다.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '책 삭제', description: '특정 책을 삭제합니다.' })
  @ApiParam({ name: 'id', description: '책 ID', type: Number })
  @ApiResponse({ status: 200, description: '책이 성공적으로 삭제되었습니다.' })
  @ApiResponse({ status: 404, description: '책을 찾을 수 없습니다.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.remove(id);
  }
}
