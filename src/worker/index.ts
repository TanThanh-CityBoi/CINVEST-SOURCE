import pino from 'pino';

import { defaultPinoOptions } from '../utils/logger';

const logger = pino({
  name: 'worker',
  ...defaultPinoOptions,
});

const startWorker = async () => {
  logger.info('Starting worker');
};

startWorker().catch((err) => {
  logger.error(err);
  process.exit(1);
});
