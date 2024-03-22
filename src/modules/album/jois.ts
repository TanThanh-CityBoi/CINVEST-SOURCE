import Joi from 'joi';

import { baseSchema, paginationSchema } from '../../common/base/pagination.joi';
export const albumSchema = Joi.object({
  name: Joi.string().optional(),
}).append(baseSchema);

export const queryAlbumSchema = albumSchema.append(paginationSchema);
