import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const originalUrl = req.originalUrl;
    const method = req.method;
    const body = req.body;
    const query = req.query;
    Logger.debug(
      `${originalUrl} ${method} : ${JSON.stringify({ body, query })}`,
    );
    next();
  }
}
