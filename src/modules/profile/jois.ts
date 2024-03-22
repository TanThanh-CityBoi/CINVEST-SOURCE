import { Request } from 'express';
import Joi from 'joi';

import { baseSchema, paginationSchema } from '../../common/base/pagination.joi';
import { GenderEnum, IndMajorEnum } from '../../common/enums/enums';
import { trimPhoneNumber } from '../../utils/string';
import { albumSchema } from '../album/jois';
import { educationSchema } from '../education/jois';
import { exitSchema } from '../exit/jois';
import { experienceSchema } from '../experience/jois';
import { transferSchema } from '../transfer/jois';
import { MajorEnum } from '../user/types';

export const interestedMappingSchema = Joi.object({
  profileId: Joi.number().optional(),
  albumId: Joi.number().optional(),
}).append(baseSchema);
export const skillMappingSchema = Joi.object({
  profileId: Joi.number().optional(),
  skillId: Joi.number().optional(),
}).append(baseSchema);
export const profileSchema = Joi.object({
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  gender: Joi.string().valid(GenderEnum.MALE, GenderEnum.FEMALE).optional(),
  dob: Joi.date().optional(),
  type: Joi.string()
    .valid(IndMajorEnum.PERSONAL, IndMajorEnum.PARTNER, IndMajorEnum.INVESTOR)
    .optional(),
  cityId: Joi.number().optional(),
  description: Joi.string().optional(),
  userId: Joi.number().optional(),
  albums: Joi.array().items(albumSchema).optional(),
  skills: Joi.array().items(skillMappingSchema).optional(),
  educations: Joi.array().items(educationSchema).optional(),
  experiences: Joi.array().items(experienceSchema).optional(),
  transfers: Joi.array().items(transferSchema).optional(),
  exits: Joi.array().items(exitSchema).optional(),
}).append(baseSchema);
export const queryProfileSchema = profileSchema.append(paginationSchema);
export const getDetailValues = async (
  req: Request,
): Promise<{
  slug: string;
}> => {
  const schema = Joi.object({
    slug: Joi.string().required(),
  });
  const values = await schema.validateAsync(req.query || {});
  return values;
};

export const updatePhoneNumberValues = async (
  req: Request,
): Promise<{
  phone: string;
  phonePrefix: string;
}> => {
  const schema = Joi.object({
    phone: Joi.string().required(),
    phonePrefix: Joi.string().required(),
  });
  const values = await schema.validateAsync(req.body || {});
  values.phone = trimPhoneNumber(values.phone);

  return values;
};

//Get value update of request

export const paramValues = async (
  req: Request,
): Promise<{ type: MajorEnum }> => {
  const schema = Joi.object({
    type: Joi.string().valid(...Object.values(MajorEnum)),
  });

  const values = await schema.validateAsync(req.query || {});
  return values;
};
export const paramInterestsValues = async (
  req: Request,
): Promise<{ type: MajorEnum; perPage: number; page: number }> => {
  const schema = Joi.object({
    type: Joi.string().valid(...Object.values(MajorEnum)),
    page: Joi.number().min(1).required(),
    perPage: Joi.number().min(1).required(),
  });

  const values = await schema.validateAsync(req.query || {});
  return values;
};
