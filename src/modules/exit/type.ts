import { TBaseAbstract } from '../../common/base/base.interface';
import { StateEnum } from '../../common/enums/enums';

export interface TExit extends TBaseAbstract {
  exitDate?: Date;
  companyId?: number;
  profileId: number;
  state?: StateEnum;
}
