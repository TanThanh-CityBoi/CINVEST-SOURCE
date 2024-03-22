import Joi from 'joi';

import { baseSchema, paginationSchema } from '../../common/base/pagination.joi';

export const jobTitleSchema = Joi.object({
  name: Joi.string().optional(),
  isBoard: Joi.boolean().optional(),
}).append(baseSchema);

export const queryJobTitleSchema = jobTitleSchema.append(paginationSchema);
