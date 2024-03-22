import Joi from 'joi';

import { baseSchema, paginationSchema } from '../../common/base/pagination.joi';

export const ipoStockSchema = Joi.object({
  ipoValue: Joi.number().optional(),
  ipoSharePrice: Joi.number().optional(),
  description: Joi.string().optional(),
  ipoDate: Joi.date().optional(),
  chartSource: Joi.string().optional(),
  companyId: Joi.number().optional(),
}).append(baseSchema);

export const queryIpoStockSchema = ipoStockSchema.append(paginationSchema);
