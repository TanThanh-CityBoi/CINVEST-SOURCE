import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Response } from 'express';

import { ChangePasswordDto } from '../cognito/dto/change-password.dto';
import { ConfirmPasswordDto } from '../cognito/dto/confirm-password.dto';
import { ForgotPasswordDto } from '../cognito/dto/forgot-password.dto';
import { RegisterDto } from '../cognito/dto/register.dto';
import { SignInDTO } from '../cognito/dto/sign-in.dto';
import { ValidateCodeDTO } from '../cognito/dto/validate.dto';
import { CognitoService } from '../cognito/service';
import { UserService } from '../profiles/user/service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly cognitoService: CognitoService,
  ) {}

  async register(dto: RegisterDto, response: Response) {
    try {
      const data = await this.cognitoService.createUserHandler(dto);
      if (data) {
        dto.sub = data.userSub;

        return await this.userService.create(dto, response);
      }
    } catch (error) {
      throw new HttpException(error?.message, HttpStatus.BAD_REQUEST);
    }
  }

  async login(dto: SignInDTO) {
    return this.cognitoService.loginHandler(dto);
  }

  async validate(dto: ValidateCodeDTO) {
    return this.cognitoService.validateCode(dto);
  }

  async refresh(token: string) {
    return this.cognitoService.refreshToken(token);
  }

  async changePassword(email: string, dto: ChangePasswordDto) {
    return this.cognitoService.changePassword(email, dto);
  }

  forgotPassword(dto: ForgotPasswordDto) {
    return this.cognitoService.forgotPassword(dto);
  }

  async confirmPassword(dto: ConfirmPasswordDto) {
    return this.cognitoService.confirmPassword(dto);
  }
}
