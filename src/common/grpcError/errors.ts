import * as grpc from '@grpc/grpc-js';

import { ApiErrorEnum } from '../../types/apiErrors';
export const errorNotfound: grpc.ServerErrorResponse = {
  code: grpc.status.NOT_FOUND,
  message: ApiErrorEnum.NOT_FOUND,
  name: ApiErrorEnum.NOT_FOUND,
};

export class grpcError {
  res: { code: number; message: string; error: any };
  constructor(code: number, message: string, error?: string) {
    this.res = { code, message, error };
  }
}

export class grpcErrorNotFound extends grpcError {
  constructor() {
    super(grpc.status.NOT_FOUND, ApiErrorEnum.NOT_FOUND);
  }
}

export class grpcErrorBadRequest extends grpcError {
  constructor(error?: string) {
    super(grpc.status.FAILED_PRECONDITION, error ?? ApiErrorEnum.BAD_REQUEST);
  }
}
