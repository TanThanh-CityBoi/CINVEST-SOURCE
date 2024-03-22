import { Module } from '@nestjs/common';

import { CognitoModule } from '../cognito/module';
import { UserModule } from '../profiles/user/module';
import { AuthController } from './controller';
import { AuthService } from './service';

@Module({
  imports: [CognitoModule, UserModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
