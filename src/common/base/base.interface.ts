import { StateEnum } from '../enums/enums';

export interface TBaseAbstract {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
  state?: StateEnum;
}
