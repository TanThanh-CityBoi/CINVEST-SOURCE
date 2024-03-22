// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import 'reflect-metadata';

import * as grpc from '@grpc/grpc-js';
import pino from 'pino';

import { server } from './config/grpc.config';
import { connection } from './config/ormconfig';
import { GRPC_HOST, TYPEORM_PORT } from './utils/constants';
import { defaultPinoOptions } from './utils/logger';
const rpcserver = server;

const logger = pino({
  name: 'api',
  ...defaultPinoOptions,
});

rpcserver.bindAsync(
  `${GRPC_HOST}`,
  grpc.ServerCredentials.createInsecure(),
  async (err, port) => {
    if (err) {
      // eslint-disable-next-line no-console
      logger.error(err);

      return;
    }
    server.start();
    logger.info(`${GRPC_HOST}: GRPC server started`);
    logger.info(`${TYPEORM_PORT}: Database connecting`);
    await connection.initialize();
    logger.info(`${TYPEORM_PORT}: Database connected`);

    logger.info(`listen on ${port}`);
  },
);
