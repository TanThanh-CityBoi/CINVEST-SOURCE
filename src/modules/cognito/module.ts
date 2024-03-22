import { CognitoAuthModule } from '@nestjs-cognito/auth';
import { Module } from '@nestjs/common';
import {
  AWS_COGNITO_CLIENT_ID,
  AWS_COGNITO_USERPOOL_ID,
} from 'src/common/constants/constants';
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
})
export class CognitoModule {}
