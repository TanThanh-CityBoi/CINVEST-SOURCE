import { grpcErrorBadRequest } from '../../common/grpcError/errors';
import { TStatisticRequest, TStatisticResponse } from './types';

export class StatisticService {
  constructor() {
    //
  }

  async getList(query: TStatisticRequest): Promise<TStatisticResponse> {
    try {
      return {
        totalCampaigns: 100,
        totalInvestors: 100,
        totalEnterprises: 100,
        totalPartners: 100,
      };
    } catch (error: any) {
      throw new grpcErrorBadRequest(JSON.stringify(error?.message ?? error));
    }
  }
}
