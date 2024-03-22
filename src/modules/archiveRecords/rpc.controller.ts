import * as grpc from '@grpc/grpc-js';
import { grpcError } from '../../common/grpcError/errors';
import { GetListResponse } from '../../proto/types/archiveRecords/GetListResponse';
import { QueryArchiveRecord__Output } from '../../proto/types/archiveRecords/QueryArchiveRecord';
import { ApiErrorEnum } from '../../types/apiErrors';
import { ApiMessageEnum } from '../../types/apiMessages';
import {
  convertStringToDate,
  convertDateToString,
} from '../../utils/mutateQuery';
import { ArchiveRecordService } from './service';

export class rpcArchiveRecordController {
  private readonly service = new ArchiveRecordService();

  async getList(
    req: grpc.ServerUnaryCall<QueryArchiveRecord__Output, GetListResponse>,
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
}
