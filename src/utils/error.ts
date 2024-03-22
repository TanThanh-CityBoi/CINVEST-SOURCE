import { grpcErrorBadRequest } from '../common/grpcError/errors';
import { ApiErrorCode, ApiErrorEnum } from '../types/apiErrors';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toJSON: (this: Error) => Record<string, any> = function toJson() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const e = {} as Record<string, any>;
  Object.getOwnPropertyNames(this).forEach((key: string) => {
    if (key === 'stack') return;
    e[key] = this[key as keyof Error];
  });

  return e;
};

export class HttpError extends Error {
  toJSON = toJSON.bind(this);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(
    public status: number,
    message?: string,
    public data?: any,
  ) {
    super(message);
    this.name = 'HttpError';
  }
}

export class NotFoundError extends HttpError {
  constructor(entity: string, data: any) {
    super(404, 'error.entity_not_found', { entity, ...data });
    this.name = 'NotFoundError';
  }
}

export class BadInputError extends HttpError {
  constructor(i18nKey: string, data?: any) {
    super(400, i18nKey, data);
  }
}

export class JobError extends HttpError {
  constructor(
    public jobName: string,
    public errors?: Error[],
  ) {
    super(400, 'job_failure');
    this.name = 'JobError';
  }
}

export const throwHttpNotFound = (): HttpError => {
  throw new HttpError(404, ApiErrorEnum.NOT_FOUND);
};

export const throwHttpSystemError = (): HttpError => {
  throw new HttpError(500, ApiErrorEnum.SYSTEM_ERROR);
};

export const throwCommonGrpcError = (error: unknown): grpcErrorBadRequest => {
  if (error instanceof Error) {
    throw new grpcErrorBadRequest(error.toString());
  }

  throw new grpcErrorBadRequest(JSON.stringify(error));
};

export class ErrorNotFound extends HttpError {
  constructor() {
    super(ApiErrorCode.NOT_FOUND, ApiErrorEnum.NOT_FOUND);
    this.name = 'ErrorNotFound';
  }
}

export class ErrorBadRequest extends HttpError {
  constructor() {
    super(ApiErrorCode.BAD_REQUEST, ApiErrorEnum.BAD_REQUEST);
    this.name = 'ErrorBadRequest';
  }
}
