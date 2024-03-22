import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';
import { TFileEntity } from '../files/types';

export interface TExperience extends TBaseAbstract {
  orgId?: number;
  startDate?: Date;
  endDate?: Date;
  cityId?: number;
  employmentType?: string;
  jobTitleId?: number;
  currentWorking?: boolean;
  description?: string;
  profileId?: number;
  documents?: TFileEntity[];
  startYear?: string;
  endYear?: string;
}

export interface TQueryExperience extends TExperience, TPagination {}
