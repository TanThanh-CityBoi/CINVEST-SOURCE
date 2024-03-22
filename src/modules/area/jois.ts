import Joi from 'joi';

import { baseSchema, paginationSchema } from '../../common/base/pagination.joi';

export const citySchema = Joi.object({
  name: Joi.string().optional(),
  countryId: Joi.number().optional(),
}).append(baseSchema);
export const queryCitySchema = citySchema.append(paginationSchema);
