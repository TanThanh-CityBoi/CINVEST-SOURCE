// exception.filter.ts
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { mappingStatusCodeRpcHttp } from '../constants/status-code.constant';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    let status: number;
    let message: string;
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.message;
    } else {
      status = exception?.code
        ? mappingStatusCodeRpcHttp[exception?.code]
        : HttpStatus.INTERNAL_SERVER_ERROR;
      message = exception.details || 'Internal Server Error';
    }
    response.status(status).json({
      statusCode: status,
      message,
    });
  }
}
