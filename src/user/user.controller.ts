import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { FindUserReqDto } from './dto/req.dto';
import { FindUserResDto } from './dto/res.dto';
import { ApiGetItemsResponse, ApiGetResponse } from 'src/common/decorators/swagger.decorator';
import { PageReqDto } from 'src/common/dto/req.dto';
import { PageResDto } from 'src/common/dto/res.dto';
import { User, UserAfterAuth } from 'src/common/decorators/user.decorator';
import { Roles } from 'src/common/decorators/role.decorator';
import { Role } from './enum/user.enum';

@ApiTags('User')
@ApiExtraModels(FindUserReqDto, FindUserResDto, PageReqDto, PageResDto)
@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @ApiGetItemsResponse(FindUserResDto)
  @Roles(Role.Admin)
  @Get()
  findAll(@Query() { page, size }: PageReqDto, @User() user: UserAfterAuth) {
    console.log(user);
    return this.userService.findAll();
  }

  @ApiBearerAuth()
  @ApiGetResponse(FindUserResDto)
  @Get(':id')
  findOne(@Param() { id }: FindUserReqDto) {
    return this.userService.findOne(id);
  }
}
