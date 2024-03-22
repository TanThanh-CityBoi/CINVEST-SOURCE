import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';
import { TFileEntity } from '../files/types';

export interface TEducation extends TBaseAbstract {
  schoolId?: number;
  startDate?: Date;
  endDate?: Date;
  degreeType?: string;
  major?: string;
  gpa?: number;
  description?: string;
  documents?: TFileEntity[];
  profileId?: number;
  cityId?: number;
  startYear?: string;
  endYear?: string;
}

export interface TQueryEducation extends TPagination, TEducation {}
