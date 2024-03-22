import * as grpc from '@grpc/grpc-js';

import { grpcError } from '../../common/grpcError/errors';
import { Id__Output } from '../../proto/types/bases/Id';
import { GetListResponse } from '../../proto/types/jobTitles/GetListResponse';
import { GetOneResponse } from '../../proto/types/jobTitles/GetOneResponse';
import { JobTitle__Output } from '../../proto/types/jobTitles/JobTitle';
import { QueryJobTitle__Output } from '../../proto/types/jobTitles/QueryJobTitle';
import { ApiErrorEnum } from '../../types/apiErrors';
import { ApiMessageEnum } from '../../types/apiMessages';
import {
  convertDateToString,
  convertStringToDate,
} from '../../utils/mutateQuery';
import { JobTitleService } from './service';
export class rpcJobTitleController {
  private readonly service = new JobTitleService();

  async getList(
    req: grpc.ServerUnaryCall<QueryJobTitle__Output, GetListResponse>,
    res: grpc.sendUnaryData<GetListResponse>,
  ) {
    try {
      const request = convertStringToDate(req.request);
      const data = await this.service.getList(request);

      const result = convertDateToString(data.data);

      res(null, {
        message: ApiMessageEnum.FETCH_SUCCESS,
        data: [...result],
        perPage: data.perPage,
        page: data.page,
        totalItems: data.totalItems,
        totalPages: data.totalPages,
      });
    } catch (error) {
      if (error instanceof grpcError) res(error.res);
      res({
        code: grpc.status.INTERNAL,
        message: ApiErrorEnum.BAD_REQUEST,
      });
    }
  }

  async getById(
    req: grpc.ServerUnaryCall<Id__Output, GetOneResponse>,
    res: grpc.sendUnaryData<GetOneResponse>,
  ) {
    try {
      const data = await this.service.getById(req.request.id);

      const result = convertDateToString([data]);

      res(null, {
        message: ApiMessageEnum.FETCH_SUCCESS,
        data: { ...result[0] },
      });
    } catch (error) {
      if (error instanceof grpcError) res(error.res);
      res({
        code: grpc.status.INTERNAL,
        message: ApiErrorEnum.BAD_REQUEST,
      });
    }
  }

  async create(
    req: grpc.ServerUnaryCall<JobTitle__Output, GetOneResponse>,
    res: grpc.sendUnaryData<GetOneResponse>,
  ) {
    try {
      const request = convertStringToDate(req.request);
      const data = await this.service.create(request);
      const result = convertDateToString([data]);

      res(null, {
        message: ApiMessageEnum.CREATED_SUCCESS,
        data: { ...result[0] },
      });
    } catch (error) {
      if (error instanceof grpcError) res(error.res);
      res({
        code: grpc.status.INTERNAL,
        message: ApiErrorEnum.BAD_REQUEST,
      });
    }
  }

  async update(
    req: grpc.ServerUnaryCall<JobTitle__Output, GetOneResponse>,
    res: grpc.sendUnaryData<GetOneResponse>,
  ) {
    try {
      const request = convertStringToDate(req.request);
      const data = await this.service.update(request.id, request);
      const result = convertDateToString([data]);

      res(null, {
        message: ApiMessageEnum.UPDATED_SUCCESS,
        data: { ...result[0] },
      });
    } catch (error) {
      if (error instanceof grpcError) res(error.res);
      res({
        code: grpc.status.INTERNAL,
        message: ApiErrorEnum.BAD_REQUEST,
      });
    }
  }

  async delete(
    req: grpc.ServerUnaryCall<Id__Output, GetOneResponse>,
    res: grpc.sendUnaryData<GetOneResponse>,
  ) {
    try {
      await this.service.delete(req.request.id);

      res(null, {
        message: ApiMessageEnum.DELETED_SUCCESS,
      });
    } catch (error) {
      if (error instanceof grpcError) res(error.res);
      res({
        code: grpc.status.INTERNAL,
        message: ApiErrorEnum.BAD_REQUEST,
      });
    }
  }
}
