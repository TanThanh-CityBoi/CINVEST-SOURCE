import S3 from 'aws-sdk/clients/s3';
import FileType from 'file-type';
import _ from 'lodash';
import { URL } from 'url';

import { BaseService } from '../../services/Base.service';
import { AWS_BUCKET_NAME, UPLOAD_FOLDER_NAME } from '../../utils/constants';

export class S3Service extends BaseService {
  private s3 = new S3();

  static addPrefix(Key: string) {
    Key = `${UPLOAD_FOLDER_NAME}/${Key}`;

    return Key;
  }

  async createPresignedUrl(
    action: 'put' | 'get',
    Key: string,
    Expires: number,
    extraParams?: any,
  ) {
    return this.s3.getSignedUrl(`${action}Object`, {
      Bucket: AWS_BUCKET_NAME,
      Key: S3Service.addPrefix(Key),
      ...(Expires && { Expires }),
      ...extraParams,
    });
  }

  async uploadFile(
    file: Buffer,
    Key: string,
    params: Partial<S3.PutObjectRequest>,
  ) {
    return this.s3
      .upload({
        ...params,
        Bucket: AWS_BUCKET_NAME,
        Key: S3Service.addPrefix(Key),
        Body: file,
        ContentType:
          params.ContentType || (await FileType.fromBuffer(file))?.mime,
      })
      .promise();
  }

  async deleteObject(Key: string) {
    return this.s3
      .deleteObject({
        Bucket: AWS_BUCKET_NAME,
        Key,
      })
      .promise();
  }

  async deleteObjectFromUrl(addr: any) {
    if (!addr) {
      return;
    }
    const url = new URL(addr);
    if (!url.pathname) {
      return;
    }
    const key = url.pathname.replace(new RegExp('^/'), '');
    await this.deleteObject(decodeURIComponent(key));

    return;
  }

  //Delete values array when receive
  async deleteArrayFromUrl(addr: any, paramsName: string[]) {
    if (_.isEmpty(addr)) {
      return;
    }

    //Loop array handle delete each item
    addr.forEach((element: any) => {
      paramsName.forEach((param) => {
        this.deleteObjectFromUrl(element[param]);
      });
    });

    return;
  }
}
