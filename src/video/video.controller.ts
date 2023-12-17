import { CreateVideoReqDto, FindVideoReqDto } from './dto/req.dto';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { VideoService } from './video.service';
import { CreateVideoResDto, FindVideoResDto } from './dto/res.dto';
import { ApiGetResponse, ApiPostResponse } from 'src/common/decorators/swagger.decorator';
import { PageReqDto } from 'src/common/dto/req.dto';

@ApiTags('Video')
@ApiExtraModels(FindVideoReqDto, CreateVideoResDto, FindVideoResDto, PageReqDto)
@Controller('api/videos')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @ApiBearerAuth()
  @ApiPostResponse(CreateVideoResDto)
  @Post()
  upload(@Body() { title, video }: CreateVideoReqDto) {
    return this.videoService.create();
  }

  @ApiBearerAuth()
  @Get()
  findAll(@Query() { page, size }: PageReqDto) {
    return this.videoService.findAll();
  }

  @ApiBearerAuth()
  @ApiGetResponse(FindVideoResDto)
  @Get(':id')
  findOne(@Param() { id }: FindVideoReqDto) {
    return this.videoService.findOne(id);
  }

  @ApiBearerAuth()
  @Get(':id/download')
  async download(@Param() { id }: FindVideoReqDto) {
    return this.videoService.download(id);
  }
}
