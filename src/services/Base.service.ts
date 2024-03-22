import pino from 'pino';

import { defaultPinoOptions } from '../utils/logger';

export class BaseService {
  protected logger = pino({
    ...defaultPinoOptions,
    name: this.constructor.name,
  });
}
