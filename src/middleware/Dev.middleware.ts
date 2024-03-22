import { NextFunction, Request, Response } from 'express';

import { ApiErrorEnum } from '../types/apiErrors';
import { DEV_KEY } from '../utils/constants';
import { HttpError } from '../utils/error';

export const development = () => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const dev_key: any = (request.headers as any).dev_key;
    if (dev_key === DEV_KEY) {
      return next();
    } else {
      throw new HttpError(403, ApiErrorEnum.FORBIDDEN);
    }
  };
};
