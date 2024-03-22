import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard, CognitoUser } from '@nestjs-cognito/auth';
import { Response } from 'express';
import { CONTROLLER_ENUM } from 'src/common/enums/controller.enums';

import { ChangePasswordDto } from '../cognito/dto/change-password.dto';
import { ConfirmPasswordDto } from '../cognito/dto/confirm-password.dto';
import { ForgotPasswordDto } from '../cognito/dto/forgot-password.dto';
import { RefreshtDto } from '../cognito/dto/refresh.dto';
import { RegisterDto } from '../cognito/dto/register.dto';
import { SignInDTO } from '../cognito/dto/sign-in.dto';
import { ValidateCodeDTO } from '../cognito/dto/validate.dto';
import { AuthService } from './service';

@Controller(CONTROLLER_ENUM.AUTH)
@ApiTags(CONTROLLER_ENUM.AUTH)
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: SignInDTO) {
    return this.service.login(loginDto);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto, @Res() res: Response) {
    return this.service.register(registerDto, res);
  }

  @Post('validate')
  async validate(@Body() data: ValidateCodeDTO) {
    return this.service.validate(data);
  }

  @Post('refresh')
  async refresh(@Body() data: RefreshtDto) {
    return this.service.refresh(data.token);
  }

  @UseGuards(AuthenticationGuard)
  @Post('/change-password')
  async changePassword(
    @CognitoUser('email') email: string,
    @Body() changePasswordDto: ChangePasswordDto,
  ) {
    return this.service.changePassword(email, changePasswordDto);
  }

  @Post('forgot-password')
  async forgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.service.forgotPassword(dto);
  }

  @Post('confirm-password')
  async confirmPassword(@Body() dto: ConfirmPasswordDto) {
    return this.service.confirmPassword(dto);
  }
}
