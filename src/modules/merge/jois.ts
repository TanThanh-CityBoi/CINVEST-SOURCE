import Joi from 'joi';

import { baseSchema, paginationSchema } from '../../common/base/pagination.joi';

export const mergeSchema = Joi.object({
  acquirerId: Joi.number().optional(),
  acquireeId: Joi.number().optional(),
  description: Joi.string().optional(),
  announcedDate: Joi.date().optional(),
  endDate: Joi.date().optional(),
  value: Joi.number().optional(),
}).append(baseSchema);

export const queryMergeSchema = mergeSchema.append(paginationSchema);
