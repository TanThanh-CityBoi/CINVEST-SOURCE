import Joi from 'joi';

import { paginationSchema } from '../../common/base/pagination.joi';

export const experienceSchema = Joi.object({
  id: Joi.number().optional(),
  orgId: Joi.number().optional(),
  startDate: Joi.date().optional(),
  endDate: Joi.date().optional(),
  cityId: Joi.number().optional(),
  employmentType: Joi.string().optional(),
  jobTitleId: Joi.number().optional(),
  currentWorking: Joi.boolean().optional(),
  description: Joi.string().optional(),
  profileId: Joi.number().optional(),
});
export const queryExperienceSchema = experienceSchema.append(paginationSchema);
