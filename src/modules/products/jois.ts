import Joi from 'joi';

import { baseSchema, paginationSchema } from '../../common/base/pagination.joi';

export const productSchema = Joi.object({
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  typeId: Joi.number().optional(),
  logoId: Joi.number().optional(),
}).append(baseSchema);

export const queryProductSchema = productSchema.append(paginationSchema);
