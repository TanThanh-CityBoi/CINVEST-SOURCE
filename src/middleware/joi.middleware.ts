import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
export const joiMiddleware = (schema: Joi.ObjectSchema<any>) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const { error } = await schema.validateAsync(request.body || request.query);
    if (error) {
      const errorMessage = error?.details
        .map((detail: { message: any }) => detail?.message)
        .join('; ');
      return response.status(400).json({ error: errorMessage });
    }
    next();
  };
};
