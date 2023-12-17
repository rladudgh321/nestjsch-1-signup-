import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { SigninReqDto, SignupReqDto } from './dto/req.dto';
import { SigninResDto, SignupResDto } from './dto/res.dto';
import { ApiPostResponse } from 'src/common/decorators/swagger.decorator';
import { Public } from 'src/common/decorators/public.decrorator';

@ApiTags('Auth')
@ApiExtraModels(SignupResDto, SigninResDto)
@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  
  @ApiPostResponse(SignupResDto)
  @Post('signup')
  @Public()
  async signup(@Body() { email, password, passwordConfirm }: SignupReqDto) {
    if (password !== passwordConfirm) throw new UnauthorizedException();
    const { id } = await this.authService.signup(email, password);
    return { id };
  }

  @ApiPostResponse(SigninResDto)
  @Post('signin')
  @Public()
  async signin(@Body() { email, password }: SigninReqDto) {
    return this.authService.signin(email, password);
  }
}
