import { Request } from 'express';
import Joi from 'joi';

import { ResourceEnum, TResource } from './types';

export const presignedUrlValues = async (
  req: Request,
): Promise<{
  contentType: string;
  resource: TResource;
  name: string;
}> => {
  const schema = Joi.object({
    contentType: Joi.string().required(),
    name: Joi.string().required(),
    resource: Joi.string().valid(...Object.values(ResourceEnum)),
  });
  const values = await schema.validateAsync(req.body || {});
  return values;
};

export const ckeditorValues = async (
  req: Request,
): Promise<{
  resource: 'posts-content';
}> => {
  const schema = Joi.object({
    resource: Joi.string().valid('posts-content'),
  });
  const values = await schema.validateAsync(req.params || {});
  return values;
};
