import { NextFunction, Request, Response } from 'express';
import pino from 'pino';

import { ApiResponse } from '../types';
import { HttpError } from '../utils/error';
import { defaultPinoOptions } from '../utils/logger';

const userErrors = [
  {
    name: 'EntityNotFound',
    status: 404,
  },
  {
    name: 'HttpError',
  },
  {
    name: 'NotFoundError',
  },
  { name: 'JobError' },
  {
    name: 'ValidationError',
    status: 400,
  },
];

const logger = pino({ ...defaultPinoOptions, name: 'errorHandler' });

export const errorHandler = (
  err: any,
  req: Request,
  res: Response<ApiResponse<null>>,
  next: NextFunction,
) => {
  const userError = userErrors.find((ue) => ue.name === err.name);

  if (!userError) {
    logger.error(err);
    err = new HttpError(500, 'error.unknown');
  }

  if (res.headersSent) return next(err);

  let statusCode = userError?.status || err.status || err.statusCode;
  if (!statusCode || statusCode < 100 || statusCode > 599) statusCode = 500;

  res.status(statusCode).json({
    data: null,
    error: { message: err.message, status: statusCode, data: err.data },
  });
};
