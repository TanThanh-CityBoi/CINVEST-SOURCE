import { HttpError } from '../utils/error';
import { TApiError } from './apiErrors';

export interface ApiResponse<T = unknown> {
  message?: string;
  data: T | null;
  error?: {
    message: TApiError;
    status?: number;
    data?: any;
  };
}

export interface ApiCkeditorResponse {
  uploaded: boolean;
  url?: string;
  error?: {
    message: string;
  };
}

export interface TTokens {
  accessToken?: string;
  refreshToken?: string;
}

export interface TCountryCode {
  countryNameEn: string;
  countryNameLocal: string;
  countryCode: string;
  currencyCode: string;
  currencyNameEn: string;
  tinType: string;
  tinName: string;
  officialLanguageCode: string;
  officialLanguageNameEn: string;
  officialLanguageNameLocal: string;
  countryCallingCode: string;
  region: string;
  flag: string;
}

export interface TUploadedFile {
  fieldname: string;
  mimetype: string;
  filename: string;
  size: number;
  relativePath: string;
  link: string;
}

export interface TPaginateOptions {
  page: number;
  perPage: number;
}

export interface TSortEntry<T> {
  sortKey: T;
  sortDir: 'ASC' | 'DESC';
}

// sync_app
export type TSort = 'createdAt' | 'updatedAt';
export enum SortEnum {
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export type TSortDir = 'ASC' | 'DESC';

export interface TPaginationResult<T> {
  data: T[];
  totalItems: number;
  perPage: number;
  totalPages?: number;
  page?: number;
}

export interface TDeleteCheckResult<T> {
  can: boolean;
  item: T | null;
  httpError?: HttpError;
}

export interface TDeleteOptions {
  disableValidate?: boolean;
}
