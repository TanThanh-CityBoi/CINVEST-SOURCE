import { Request } from 'express';

import { TFile } from '../modules/files/types';
import { ApiErrorEnum } from '../types/apiErrors';
import { HttpError } from './error';
export const generateFiles = (req: Request) => {
  if (!req.files) throw new HttpError(400, ApiErrorEnum.BAD_REQUEST);
  let files: Express.Multer.File[] = [];
  if (Array.isArray(req.files)) {
    files = [...req.files];
  }
  const dto: TFile[] = files.map((item, index) => {
    return {
      file: item.buffer,
      Key: req.body.Key + index,
      params: req.body?.params,
    };
  });
  return dto;
};
