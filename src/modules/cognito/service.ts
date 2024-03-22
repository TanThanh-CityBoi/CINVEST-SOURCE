import { Injectable } from '@nestjs/common';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
} from 'amazon-cognito-identity-js';
import * as aws from 'aws-sdk';
import {
  AWS_ACCESSKEY_ID,
  AWS_COGNITO_CLIENT_ID,
  AWS_COGNITO_REGION,
  AWS_COGNITO_USERPOOL_ID,
  AWS_SECRET_ACCESS_KEY,
} from 'src/common/constants/constants';
import {
  CognitoGroupEnum,
  ProfileTypeEnum,
  RoleEnum,
} from 'src/common/enums/enums';

import { ChangePasswordDto } from './dto/change-password.dto';
import { ConfirmPasswordDto } from './dto/confirm-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { RegisterDto } from './dto/register.dto';
import { SignInDTO } from './dto/sign-in.dto';
import { ValidateCodeDTO } from './dto/validate.dto';

@Injectable()
export class CognitoService {
  private userPool: CognitoUserPool;
  private cognitoClient = new aws.CognitoIdentityServiceProvider({
    apiVersion: 'latest',
    region: AWS_COGNITO_REGION,
  });

  constructor() {
    this.cognitoClient.config.update({
      region: AWS_COGNITO_REGION,
      accessKeyId: AWS_ACCESSKEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    });
    this.userPool = new CognitoUserPool({
      UserPoolId: AWS_COGNITO_USERPOOL_ID,
      ClientId: AWS_COGNITO_CLIENT_ID,
    });
  }

  createUserHandler(createUserDto: RegisterDto): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.userPool.signUp(
        createUserDto.email,
        createUserDto.password,
        [
          new CognitoUserAttribute({
            Name: 'email',
            Value: createUserDto.email,
          }),
        ],
        null,
        async (error, result) => {
          if (error) {
            return reject(error);
            // this.cognitoClient.adminDeleteUser(
            //   {
            //     UserPoolId: AWS_COGNITO_USERPOOL_ID,
            //     Username: createUserDto.email,
            //   },
            //   (error, result) => {
            //     return error ? reject(error) : resolve(result);
            //   },
            // );
          } else {
            const confirmUser = {
              UserPoolId: AWS_COGNITO_USERPOOL_ID,
              Username: createUserDto.email,
              GroupName:
                createUserDto.role === RoleEnum.ADMIN
                  ? CognitoGroupEnum.ADMIN
                  : createUserDto.profileType === ProfileTypeEnum.ORG
                  ? CognitoGroupEnum.ORGANIZATION
                  : CognitoGroupEnum.INDIVIDUAL,
            };
            this.cognitoClient.adminAddUserToGroup(
              confirmUser,
              (err, success) => {
                return err ? reject(err) : resolve(success);
              },
            );
          }
          return resolve(result);
        },
      );
    });
  }

  // async updateUserHandler(updateUserDto: any): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     if (updateUserDto.password) {
  //       this.cognitoClient.adminSetUserPassword(
  //         {
  //           Password: updateUserDto.password,
  //           Permanent: true,
  //           UserPoolId: this.configService.get<string>(
  //             'AWS_COGNITO_USERPOOL_ID',
  //           ),
  //           Username: updateUserDto.cognito_username,
  //         },
  //         (err, result) => {
  //           if (err) {
  //             reject(err);
  //           } else {
  //             resolve(result);
  //           }
  //         },
  //       );
  //     }
  //     if (updateUserDto.email) {
  //       this.cognitoClient.adminUpdateUserAttributes(
  //         {
  //           UserPoolId: this.configService.get<string>(
  //             'AWS_COGNITO_USERPOOL_ID',
  //           ),
  //           Username: updateUserDto.cognito_username,
  //           UserAttributes: [
  //             {
  //               Name: 'email',
  //               Value: updateUserDto.email,
  //             },
  //           ],
  //         },
  //         (err, result) => {
  //           if (err) {
  //             reject(err);
  //           }
  //           resolve(result);
  //         },
  //       );
  //     }
  //   });
  // }

  async deleteUserHandler(deleteUserDto: { sub: string }): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.cognitoClient.adminDeleteUser(
        {
          UserPoolId: AWS_COGNITO_USERPOOL_ID,
          Username: deleteUserDto.sub,
        },
        (error) => {
          if (error) {
            reject(error);

            return;
          }
          resolve('SUCCESS');
        },
      );
    });
  }

  // unblockUserHandle(reactivedUser: any): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     return this.cognitoClient.adminEnableUser(
  //       {
  //         UserPoolId: AWS_COGNITO_USERPOOL_ID,
  //         Username: reactivedUser.cognito_username,
  //       },
  //       (err, result) => {
  //         if (err) {
  //           reject(err);
  //         }
  //         resolve(result);
  //       },
  //     );
  //   });
  // }

  loginHandler(loginDto: SignInDTO): Promise<any> {
    const authenticationDetails = new AuthenticationDetails({
      Username: loginDto.email,
      Password: loginDto.password,
    });
    const userData = {
      Username: loginDto.email,
      Pool: this.userPool,
    };
    const user = new CognitoUser(userData);
    return new Promise((resolve) => {
      return user.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          return resolve(result);
        },
        onFailure: (err) => {
          return resolve(err);
        },
      });
    });
  }

  async validateCode(dto: ValidateCodeDTO) {
    const { email, code } = dto;
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: this.userPool,
    });
    return new Promise((resolve) => {
      cognitoUser.confirmRegistration(code, true, function (err, result) {
        if (err) {
          return resolve({
            statusCode: 422,
            message: err.message || JSON.stringify(err),
          });
        }
        return resolve({ message: result });
      });
    });
  }

  async refreshToken(token: string) {
    return new Promise((resolve, reject) => {
      return this.cognitoClient.initiateAuth(
        {
          AuthFlow: 'REFRESH_TOKEN',
          AuthParameters: {
            REFRESH_TOKEN: token,
          },
          ClientId: AWS_COGNITO_CLIENT_ID,
        },
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        },
      );
    });
  }

  async changePassword(email: string, changePasswordDto: ChangePasswordDto) {
    const { currentPassword, newPassword } = changePasswordDto;
    const userData = {
      Username: email,
      Pool: this.userPool,
    };
    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: currentPassword,
    });
    const userCognito = new CognitoUser(userData);

    return new Promise((resolve) => {
      userCognito.authenticateUser(authenticationDetails, {
        onSuccess: () => {
          userCognito.changePassword(
            currentPassword,
            newPassword,
            (err, result) => {
              if (err) {
                resolve({
                  statusCode: 400,
                  message: err.message || JSON.stringify(err),
                });

                return;
              }
              resolve(result);
            },
          );
        },
        onFailure: (err) => {
          resolve({
            statusCode: 400,
            message: err.message || JSON.stringify(err),
          });
        },
      });
    });
  }

  async forgotPassword(forgotPasswordDto: ForgotPasswordDto) {
    const { email } = forgotPasswordDto;
    const userData = {
      Username: email,
      Pool: this.userPool,
    };
    const userCognito = new CognitoUser(userData);

    return new Promise((resolve, reject) => {
      userCognito.forgotPassword({
        onSuccess: (result) => resolve(result),
        onFailure: (err) => reject(err),
      });
    });
  }

  async confirmPassword(confirmPasswordDto: ConfirmPasswordDto) {
    const { email, resetCode, newPassword } = confirmPasswordDto;
    const userData = {
      Username: email,
      Pool: this.userPool,
    };
    const userCognito = new CognitoUser(userData);

    return new Promise((resolve) => {
      userCognito.confirmPassword(resetCode, newPassword, {
        onSuccess: (result) => resolve(result),
        onFailure: (err) => {
          resolve({
            statusCode: 400,
            message: err.message || JSON.stringify(err),
          });
        },
      });
    });
  }
}
