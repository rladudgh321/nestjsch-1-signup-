import { ApiProperty } from '@nestjs/swagger';

export class PageResDto<TData> {
  @ApiProperty({ description: '페이지 default 1', required: true })
  page: number;

  @ApiProperty({ description: '페이지당 비디오수 default 20', required: true })
  size: number;

  items: TData[];
}
