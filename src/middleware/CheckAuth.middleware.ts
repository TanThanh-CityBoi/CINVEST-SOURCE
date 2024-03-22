import { NextFunction, Request, Response } from 'express';

import { StateEnum } from '../common/enums/enums';
import { UserEntity } from '../modules/user/entities/user.entity';
import { UserService } from '../modules/user/service';
import { TMajorGroup } from '../modules/user/types';
import { ApiErrorEnum } from '../types/apiErrors';
import { HttpError } from '../utils/error';

export const authentication = (...majorGroups: TMajorGroup[]) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const user = (request as any)?.user as UserEntity | undefined;

    if (!user) {
      throw new HttpError(401, ApiErrorEnum.INVALID_TOKEN);
    }

    if (!UserService.validStatuses.includes(user?.state || StateEnum.PENDING)) {
      throw new HttpError(401, ApiErrorEnum.FORBIDDEN);
    }

    if (majorGroups.length === 0) {
      return next();
    }

    for (const majorGroup of majorGroups) {
      if (majorGroup === user.role) return next();
    }
    throw new HttpError(401, ApiErrorEnum.FORBIDDEN);
  };
};
