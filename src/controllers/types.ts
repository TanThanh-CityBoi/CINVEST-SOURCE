import { NextFunction, Request, Response } from 'express';

import { GenderEnum } from '../common/enums/enums';
import { UserEntity } from '../modules/user/entities/user.entity';
import { ApiCkeditorResponse, ApiResponse } from '../types';
import { METHOD } from '../utils/constants';

type TApiHandler = (
  req: Request,
  res: Response<ApiResponse>,
) => Promise<unknown> | unknown;

type TApiCkeditorHandler = (
  req: Request,
  res: Response<ApiCkeditorResponse>,
) => Promise<unknown> | unknown;

export interface RouteConfig {
  path: string;
  method: METHOD;
  middlewares?: ((req: Request, res: Response, next: NextFunction) => void)[];
  handler: TApiHandler | TApiCkeditorHandler;
}

export type TGetProfileResponse = {
  email: UserEntity['email'];
  phonePrefix: UserEntity['phonePrefix'];
  phone: UserEntity['phone'];
  gender: GenderEnum;
  firstName: string;
  lastName: string;
};
