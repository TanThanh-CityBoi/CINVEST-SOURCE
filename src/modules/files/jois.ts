import Joi from 'joi';

export const fileSchema = {
  file: Joi.required(),
  body: Joi.object({
    Key: Joi.string().required(),
    params: Joi.object().optional(),
  }),
};
