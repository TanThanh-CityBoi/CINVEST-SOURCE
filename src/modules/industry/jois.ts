import Joi from 'joi';

import { baseSchema, paginationSchema } from '../../common/base/pagination.joi';

export const industrySchema = Joi.object({
  name: Joi.string().optional(),
  level1: Joi.string().optional(),
  level2: Joi.number().optional(),
  level3: Joi.number().optional(),
  level4: Joi.number().optional(),
  level5: Joi.number().optional(),
}).append(baseSchema);

export const queryIndustrySchema = industrySchema.append(paginationSchema);
