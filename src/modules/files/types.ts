import S3 from 'aws-sdk/clients/s3';

import { TBaseAbstract } from '../../common/base/base.interface';

export interface TFileEntity extends TBaseAbstract {
  url?: string;
  key?: string;
}
export interface TFile {
  file: Buffer;
  Key: string;
  params?: Partial<S3.PutObjectRequest>;
}

export interface TUploadOption {
  name: string;
  max?: number;
}
