import Joi from 'joi';

import { baseSchema, paginationSchema } from '../../common/base/pagination.joi';

export const serviceSchema = Joi.object({
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  logoId: Joi.number().optional(),
  companyid: Joi.number().optional(),
  industryId: Joi.number().optional(),
}).append(baseSchema);

export const queryServiceSchema = serviceSchema.append(paginationSchema);
