import Joi from 'joi';

import { paginationSchema } from '../../common/base/pagination.joi';

export const skillSchema = Joi.object({
  id: Joi.number().optional(),
  name: Joi.string().optional(),
});

export const querySkillSchema = skillSchema.append(paginationSchema);
