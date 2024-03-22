import { TBaseAbstract } from '../../common/base/base.interface';

export interface TTransfer extends TBaseAbstract {
  transferDate?: Date;
  amount?: number;
  totalValue?: number;
  transfereeId?: number;
  profileId?: number;
}
