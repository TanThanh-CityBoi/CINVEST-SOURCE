import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';
import { ProfileTypeEnum, RoleEnum } from '../../common/enums/enums';
import { TCompany } from '../company/types';
import { TProfile } from '../profile/types';

export type TUserOptionalAttribute =
  | 'email'
  | 'gender'
  | 'createdAt'
  | 'updatedAt'
  | 'phone'
  | 'firstName'
  | 'lastName'
  | 'taxNumber'
  | 'phonePrefix'
  | 'sendVerificationAt'
  | 'status'
  | 'slug'
  | 'major'
  | 'majorGroup'
  | 'thumb'
  | 'background';
// sync_app
export interface TUser extends TBaseAbstract {
  email?: string;
  password?: string;
  phone?: string;
  phonePrefix?: string;
  profileType?: ProfileTypeEnum;
  sendVerificationAt?: number;
  slug?: string;
  role?: RoleEnum;
  thumb?: string;
  background?: string;
  profileId?: number;
  companyId?: number;
  profile?: TProfile;
  company?: TCompany;
}

export interface TCreateUser {
  email: string;
  password: string;
  phone: string;
  phonePrefix: string;
  role: RoleEnum;
  profileType: ProfileTypeEnum;
  profile?: TProfile;
  company?: TCompany;
}

export interface TQueryUser extends TPagination {
  email?: string;
  phone?: string;
  profileType?: ProfileTypeEnum;
  role?: RoleEnum;
  subs?: string[];
  ids?: number[];
}

// sync_app
export interface TUserSession {
  id: number;
  accessToken?: string;
  refreshToken?: string;
  email?: string;
  phone?: string;
  gender?: TGender;
  firstName?: string;
  lastName?: string;
  slug?: string;
  major?: TMajor;
  majorGroup?: TMajorGroup;
  thumb?: string;
  background?: string;
}

export interface TGoogleUser {
  id: number;
  email: string;
  family_name: string;
  given_name: string;
  name: string;
  locale: string;
  picture: string;
  verified_email: true;
}

// sync_app
export type TRole = 'admin' | 'personal' | 'company';
// sync_app

// sync_app
export type TMajor = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
// sync_app
export enum MajorEnum {
  PERSONAL = '1',
  INVESTOR = '2',
  INVESTMENT_PARTNER = '3',
  COMPANY = '4',
  INCUBATOR = '5',
  VENTUR_CAPITAL = '6',
  HUB = '7',
  SCHOOL = '8',
  OTHER = '9',
  ADMIN = '10',
}

// sync_app
export type TMajorGroup = '1' | '2' | '3';
// sync_app
export enum MajorGroupEnum {
  PERSONAL = '1',
  COMPANY = '2',
  ADMIN = '3',
}

// sync_app
export interface TMajorConfig {
  group: TMajorGroup;
  majors: TMajor[];
}
// sync_app
export const MAJOR_CONFIG: TMajorConfig[] = [
  {
    group: MajorGroupEnum.PERSONAL,
    majors: [
      MajorEnum.PERSONAL,
      MajorEnum.INVESTOR,
      MajorEnum.INVESTMENT_PARTNER,
    ],
  },
  {
    group: MajorGroupEnum.COMPANY,
    majors: [
      MajorEnum.COMPANY,
      MajorEnum.INCUBATOR,
      MajorEnum.VENTUR_CAPITAL,
      MajorEnum.HUB,
      MajorEnum.SCHOOL,
      MajorEnum.OTHER,
    ],
  },
  {
    group: MajorGroupEnum.ADMIN,
    majors: [MajorEnum.ADMIN],
  },
];

// sync_app
export type TStatus = 1 | 2;
// sync_app
export enum StatusEnum {
  ACTIVE = 1,
  DRAFT = 2,
}

// sync_app
export type TGender = 1 | 2 | 3;
// sync_app
export enum GenderEnum {
  FEMALE = 1,
  MALE = 2,
  OTHER = 3,
}

// sync_app
export type TSort = 'createdAt';
// sync_app
export enum SortEnum {
  createdAt = 'createdAt',
}

export interface TGetListFilter {
  majorGroup?: string;
}

export interface TGetListSearch {
  majorGroup?: string;
  firstName?: string;
  email?: string;
}

export interface TFullNameUser {
  firstName?: string;
  lastName?: string;
}
