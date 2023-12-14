import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { SigninReqDto, SignupReqDto } from './dto/req.dto';
import { SigninResDto, SignupResDto } from './dto/res.dto';
import { ApiPostResponse } from 'src/common/decorators/swagger.decorator';

@ApiTags('Auth')
@ApiExtraModels(SignupResDto, SigninResDto)
@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiPostResponse(SignupResDto)
  @Post('signup')
  async signup(@Body() { email, password, passwordConfirm }: SignupReqDto) {
    return this.authService.signup('email', 'password');
  }

  @ApiPostResponse(SigninResDto)
  @Post('signin')
  async signin(@Body() { email, password }: SigninReqDto) {
    return this.authService.signin({});
  }
}
