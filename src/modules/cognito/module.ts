import { Module } from '@nestjs/common';
import { CognitoAuthModule } from '@nestjs-cognito/auth';
import {
  AWS_COGNITO_CLIENT_ID,
  AWS_COGNITO_USERPOOL_ID,
} from 'src/common/constants/constants';

import { CognitoService } from './service';
@Module({
  imports: [
    CognitoAuthModule.register({
      jwtVerifier: {
        userPoolId: AWS_COGNITO_USERPOOL_ID,
        clientId: AWS_COGNITO_CLIENT_ID,
        tokenUse: 'id',
      },
    }),
  ],
  providers: [CognitoService],
  exports: [CognitoService],
})
export class CognitoModule {}
