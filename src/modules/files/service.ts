import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { HttpStatusCode } from 'axios';
import { catchError, map } from 'rxjs/operators';
import { FILE_SERVICE } from 'src/common/constants/constants';

import { QueryFileDto } from './dto/query.dto';
@Injectable()
export class FileService {
  constructor(private readonly httpService: HttpService) {}
  async getList(query: QueryFileDto) {
    const url = `${FILE_SERVICE}/files`;
    return this.httpService.get(url, { params: query }).pipe(
      map((res) => {
        return res.data;
      }),
      catchError((error) => {
        throw new HttpException(JSON.stringify(error), HttpStatus.BAD_REQUEST);
      }),
    );
  }

  async getById(id: number) {
    const url = `${FILE_SERVICE}/files/${id}`;
    return this.httpService
      .get(url)
      .pipe(
        map((res) => {
          return res.data;
        }),
      )
      .pipe(
        catchError((err) => {
          throw new HttpException(
            JSON.stringify(err),
            HttpStatusCode.BadRequest,
          );
        }),
      );
  }

  async uploadPublicFile(files: any[], folder: string) {
    const url = `${FILE_SERVICE}/files`;

    return this.httpService
      .post(
        url,
        {
          folder,
          files,
        },
        {
          maxContentLength: Infinity,
          maxBodyLength: Infinity,
        },
      )
      .pipe(
        map((res) => {
          return res.data;
        }),
      )
      .pipe(
        catchError((err) => {
          Logger.error(err);
          throw new HttpException(
            JSON.stringify(err),
            HttpStatusCode.BadRequest,
          );
        }),
      );
  }
}
