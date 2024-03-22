import Joi from 'joi';

import { StateEnum } from '../../common/enums/enums';

export const exitSchema = Joi.object({
  id: Joi.number().optional(),
  exitDate: Joi.date().optional(),
  companyId: Joi.number().optional(),
  profileId: Joi.number().optional(),
  state: Joi.string()
    .valid(StateEnum.APPROVED, StateEnum.PENDING, StateEnum.CANCELED)
    .optional(),
});
