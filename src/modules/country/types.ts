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
export interface TCountry extends TBaseAbstract {
  name?: string;
  countryNameEn?: string;
  countryNameLocal?: string;
  countryCode?: string;
  currencyCode?: string;
  currencyNameEn?: string;
  tinType?: string;
  tinName?: string;
  officialLanguageCode?: string;
  officialLanguageNameEn?: string;
  officialLanguageNameLocal?: string;
  countryCallingCode?: string;
  region?: string;
  flag?: string;
  areaId?: number;
}
export interface TQueryCountry extends TCountry, TPagination {}
