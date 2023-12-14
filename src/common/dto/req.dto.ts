import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt } from 'class-validator';

export class PageReqDto {
  @ApiPropertyOptional({ description: '페이지 default 1', required: true })
  @Transform(({ value }) => Number(value))
  @IsInt()
  page?: number = 1;

  @ApiPropertyOptional({ description: '페이지당 데이터 갯수 default 20', required: true })
  @Transform(({ value }) => Number(value))
  @IsInt()
  size?: number = 20;
}
