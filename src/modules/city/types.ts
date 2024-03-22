import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';

export type TCountryOptionalAttribute =
  | 'name'
  | 'countryNameEn'
  | 'countryNameLocal'
  | 'countryCode'
  | 'currencyCode'
  | 'currencyNameEn'
  | 'tinType'
  | 'tinName'
  | 'officialLanguageCode'
  | 'officialLanguageNameEn'
  | 'officialLanguageNameLocal'
  | 'countryCallingCode'
  | 'region'
  | 'flag'
  | 'createdAt'
  | 'updatedAt';
// sync_app
export interface TCity extends TBaseAbstract {
  name?: string;
  countryId?: number;
}
export interface TQueryCity extends TPagination {
  name?: string;
  countryId?: number;
}
