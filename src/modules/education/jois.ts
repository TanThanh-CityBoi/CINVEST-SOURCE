import Joi from 'joi';

import { baseSchema, paginationSchema } from '../../common/base/pagination.joi';
import { DegreeTypeEnum } from '../../common/enums/enums';

export const educationSchema = Joi.object({
  school: Joi.string().optional(),
  startDate: Joi.date().optional(),
  endDate: Joi.date().optional(),
  degreeType: Joi.string()
    .valid(
      DegreeTypeEnum.BACHELOR,
      DegreeTypeEnum.DIPLOMA,
      DegreeTypeEnum.OTHER,
    )
    .optional(),
  major: Joi.string().optional(),
  gpa: Joi.number().optional(),
  description: Joi.string().optional(),
  profileId: Joi.number().optional(),
  cityId: Joi.number().optional(),
}).append(baseSchema);

export const queryEducationSchema = educationSchema.append(paginationSchema);
