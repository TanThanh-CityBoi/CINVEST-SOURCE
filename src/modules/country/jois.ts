import Joi from 'joi';

import { baseSchema, paginationSchema } from '../../common/base/pagination.joi';

export const countrySchema = Joi.object({
  name: Joi.string().optional(),
  countryNameEn: Joi.string().optional(),
  countryCode: Joi.string().optional(),
  currencyCode: Joi.string().optional(),
  tinType: Joi.string().optional(),
  tinName: Joi.string().optional(),
  officialLangueCode: Joi.string().optional(),
  officialLanguageNameEn: Joi.string().optional(),
  officialLanguageNameLocal: Joi.string().optional(),
  countryCallingCode: Joi.string().optional(),
  region: Joi.string().optional(),
  flag: Joi.string().optional(),
}).append(baseSchema);
export const queryCountrySchema = countrySchema.append(paginationSchema);
