import * as grpc from '@grpc/grpc-js';

import { grpcError } from '../../common/grpcError/errors';
import { GetRequest__Output } from '../../proto/types/statistic/GetRequest';
import { GetResponse } from '../../proto/types/statistic/GetResponse';
import { ApiErrorEnum } from '../../types/apiErrors';
import { ApiMessageEnum } from '../../types/apiMessages';
import {
  convertDateToString,
  convertStringToDate,
} from '../../utils/mutateQuery';
import { StatisticService } from './service';

export class rpcStatisticController {
  private readonly service = new StatisticService();

  async getList(
    req: grpc.ServerUnaryCall<GetRequest__Output, GetResponse>,
    res: grpc.sendUnaryData<GetResponse>,
  ) {
    try {
      const request = convertStringToDate(req.request);
      const data = await this.service.getList(request);

      res(null, {
        message: ApiMessageEnum.FETCH_SUCCESS,
        data: data,
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
