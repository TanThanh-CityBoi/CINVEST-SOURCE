import Joi from 'joi';

import { StateEnum } from '../enums/enums';

export const paginationSchema = {
  page: Joi.number().optional(),
  limit: Joi.number().optional(),
  sortBy: Joi.string().optional(),
  sortOrder: Joi.string().optional(),
};
export const baseSchema = {
  id: Joi.number().optional(),
  createdBy: Joi.string().optional(),
  updatedBy: Joi.string().optional(),
  state: Joi.string()
    .valid(StateEnum.APPROVED, StateEnum.PENDING, StateEnum.CANCELED)
    .optional(),
};
