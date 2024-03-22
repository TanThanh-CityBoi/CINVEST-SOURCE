import { Request } from 'express';
import Joi from 'joi';

import { baseSchema, paginationSchema } from '../../common/base/pagination.joi';
import { ProfileTypeEnum, RoleEnum } from '../../common/enums/enums';
import { companySchema } from '../company/jois';
import { profileSchema } from '../profile/jois';
import {
  MajorGroupEnum,
  SortEnum,
  TFullNameUser,
  TGetListSearch,
  TMajorGroup,
  TSort,
} from './types';

export const userSchema = Joi.object({
  email: Joi.string().optional(),
  password: Joi.string().optional(),
  phone: Joi.string().optional(),
  phonePrefix: Joi.string().optional(),
  role: Joi.string().valid(RoleEnum.ADMIN, RoleEnum.USER).optional(),
  profileType: Joi.string()
    .valid(ProfileTypeEnum.IND, ProfileTypeEnum.ORG)
    .optional(),
  thumb: Joi.string().optional(),
  background: Joi.string().optional(),
  profile: profileSchema.optional(),
  company: companySchema.optional(),
}).append(baseSchema);

export const queryUserSchema = userSchema.append(paginationSchema);
export const listValues = async (
  req: Request,
): Promise<{
  page: number;
  perpage: number;
  majorGroup?: TMajorGroup;
  sortKey?: TSort;
  sortDir?: 'ASC' | 'DESC';
}> => {
  const schema = Joi.object({
    page: Joi.number().min(1).default(1),
    perpage: Joi.number().min(1).max(50).default(10),
    majorGroup: Joi.string().valid(...Object.values(MajorGroupEnum)),
    sortKey: Joi.string().valid(...Object.values(SortEnum)),
    sortDir: Joi.string().valid('ascend', 'descend'),
  });
  const values = await schema.validateAsync(req.query || {});
  if (values.sortDir === 'ascend') {
    values.sortDir = 'ASC';
  } else {
    values.sortDir = 'DESC';
  }
  return values;
};

export const attachFileValues = async (
  req: Request,
): Promise<{
  type: 'thumb' | 'background';
  url: string;
}> => {
  const schema = Joi.object({
    type: Joi.string().valid('thumb', 'background'),
    url: Joi.string().uri().allow(''),
  });
  const values = await schema.validateAsync(req.body || {});

  return values;
};

export const findValues = async (req: Request): Promise<TGetListSearch> => {
  const schema = Joi.object({
    majorGroup: Joi.string().valid(...Object.values(MajorGroupEnum)),
    firstName: Joi.string().allow(''),
    email: Joi.string().allow(''),
  });

  const values = await schema.validateAsync(req.query || {});
  return values;
};

export const findIdsValues = async (
  req: Request,
): Promise<{ ids: number[]; page: number; perpage: number }> => {
  const schema = Joi.object({
    ids: Joi.array().allow(''),
    page: Joi.number().min(1).default(1),
    perpage: Joi.number().min(1).max(50).default(10),
  });

  const values = await schema.validateAsync(req.body || {});
  return values;
};

export const updateNameValue = async (req: Request): Promise<TFullNameUser> => {
  const schema = Joi.object({
    lastName: Joi.string().allow(''),
    firstName: Joi.string().allow(''),
  });

  const values = await schema.validateAsync(req.body || {});
  return values;
};
