import Joi from 'joi';

import { StateEnum } from '../../common/enums/enums';

export const transferSchema = Joi.object({
  id: Joi.number().optional(),
  transferDate: Joi.date().optional(),
  amount: Joi.number().optional(),
  totalValue: Joi.number().optional(),
  transfereeId: Joi.number().optional(),
  profileId: Joi.number().optional(),
  state: Joi.string()
    .valid(StateEnum.APPROVED, StateEnum.PENDING, StateEnum.CANCELED)
    .optional(),
});
