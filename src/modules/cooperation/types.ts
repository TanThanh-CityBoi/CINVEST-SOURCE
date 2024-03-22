import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';

export interface TCooperationDTO extends TBaseAbstract {
  companyId: number;
  cooperationId: number;
  description: string;
  date: Date;
}

export interface TCooperationListRequest extends TCooperationDTO, TPagination {}

export type TCooperationCreateRequest = TBaseAbstract;
