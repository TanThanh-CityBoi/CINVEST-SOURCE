import { Request, Response } from 'express';
import { nanoid } from 'nanoid';

import { RouteConfig } from '../../controllers/types';
import { ApiCkeditorResponse, ApiResponse } from '../../types';
import { ApiMessageEnum } from '../../types/apiMessages';
import { METHOD } from '../../utils/constants';
import { getFiles } from '../../utils/uploader';
import { ckeditorValues, presignedUrlValues } from './jois';
import { S3Service } from './service';
import { ResourceEnum, TPresignedUrl, TResource } from './types';

export class S3Controller {
  path = '/s3';

  private s3Service = new S3Service();

  buildRoutes(): RouteConfig[] {
    return [
      {
        path: '/presigned-url',
        method: METHOD.POST,
        middlewares: [],
        handler: this.presignedUrl,
      },
      {
        path: '/ckeditor/:resource',
        method: METHOD.POST,
        middlewares: [],
        handler: this.ckeditor,
      },
    ];
  }

  async presignedUrl(req: Request, res: Response<ApiResponse<TPresignedUrl>>) {
    const values = await presignedUrlValues(req);

    const key = `${values.resource}/${nanoid(10)}${values.name}`;

    const [getUrl, putUrl] = await Promise.all([
      this.s3Service.createPresignedUrl('get', key, 0).then(
        (url) => url.split('?')[0], // remove signature from url since obj is public
      ),
      this.s3Service.createPresignedUrl('put', key, 300, {
        ContentType: values.contentType,
        ACL: 'public-read',
      }),
    ]);

    return res.send({
      message: ApiMessageEnum.CREATED_SUCCESS,
      data: {
        getUrl,
        putUrl,
      },
    });
  }

  async ckeditor(req: Request, res: Response<ApiCkeditorResponse>) {
    const values = await ckeditorValues(req);
    const files: any = await getFiles(req, res, {
      key: 'upload',
      maxCount: 1,
    });
    if (!files?.upload?.length) {
      return res.send({
        uploaded: false,
      });
    }
    let resource: TResource = ResourceEnum.BIN;
    switch (values.resource) {
      case 'posts-content':
        resource = ResourceEnum.POSTS_CONTENT;
        break;
    }
    const key = `${resource}/${nanoid(10)}${files.upload[0].originalname}`;
    const params: any = {
      ACL: 'public-read',
    };
    if (files.upload[0].mimeType) {
      params.ContentType = files.upload[0].mimeType;
    }
    const result = await this.s3Service.uploadFile(
      files.upload[0].buffer,
      key,
      params,
    );
    if (result?.Location) {
      return res.send({
        uploaded: true,
        url: result.Location,
      });
    } else {
      return res.send({
        uploaded: false,
      });
    }
  }
}
