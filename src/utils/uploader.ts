import { Request, Response } from 'express';
import fs from 'fs';
import multer from 'multer';
import path from 'path';
import sharp from 'sharp';
import util from 'util';

import { TUploadedFile } from '../types';
import { SysErrorEnum } from '../types/systemErrors';
import {
  API_URI,
  PUBLIC_FOLDER,
  UPLOADER_IMAGE_QUALITY,
  UPLOADER_MAX_FILE_SIZE,
} from './constants';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const uniqueSlug = require('unique-slug');

interface TUploadOption {
  key: string;
  maxCount: number;
  folder: string;
}

const formatFiles = async (
  options: TUploadOption,
  files: any,
): Promise<TUploadedFile[]> => {
  if (!files) {
    return [];
  }
  const newFiles: TUploadedFile[] = [];
  for (const file of files[options.key]) {
    await sharp(file.path)
      .jpeg({ quality: UPLOADER_IMAGE_QUALITY })
      .toFile(
        path.resolve(
          `${PUBLIC_FOLDER}/${options.folder}/${UPLOADER_IMAGE_QUALITY}_${file.filename}`,
        ),
      );
    file.relativePath = `/${options.folder}/${UPLOADER_IMAGE_QUALITY}_${file.filename}`;
    file.link = `${API_URI}${file.relativePath}`;
    fs.unlinkSync(file.path);
    delete file.path;
    delete file.destination;
    delete file.encoding;
    delete file.originalname;
    newFiles.push({
      fieldname: file.fieldname,
      filename: file.filename,
      mimetype: file.mimetype,
      size: file.size,
      relativePath: file.relativePath,
      link: file.link,
    });
  }
  return newFiles;
};

export const uploadFiles = async (
  options: TUploadOption,
  req: Request,
  res: Response,
) => {
  const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      const dest = path.join(path.resolve(PUBLIC_FOLDER, options.folder));
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      callback(null, dest);
    },
    filename: (req, file, callback) => {
      const userIdLogin = req.user?.id || 0;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, mimeType] = file.mimetype.split('/');
      const filename = `${Date.now()}_${uniqueSlug()}_${userIdLogin}.${mimeType}`;
      return callback(null, filename);
    },
  });

  const uploadMulter = multer({
    storage,
    limits: { fileSize: UPLOADER_MAX_FILE_SIZE },
  });

  try {
    const uploadFilesMiddleware = util.promisify(
      uploadMulter.fields([
        {
          name: options.key,
          maxCount: options.maxCount,
        },
      ]),
    );
    await uploadFilesMiddleware(req, res);
    const files = await formatFiles(options, req.files);
    return files;
  } catch (error) {
    throw new Error(SysErrorEnum.UPLOADER_ERROR);
  }
};

export const getFiles = async (
  req: Request,
  res: Response,
  options: Pick<TUploadOption, 'key' | 'maxCount'>,
) => {
  const uploadMulter = multer({
    limits: { fileSize: UPLOADER_MAX_FILE_SIZE },
  });

  try {
    const uploadFilesMiddleware = util.promisify(
      uploadMulter.fields([
        {
          name: options.key,
          maxCount: options.maxCount,
        },
      ]),
    );
    await uploadFilesMiddleware(req, res);

    return req.files;
  } catch (error) {
    throw new Error(SysErrorEnum.UPLOADER_ERROR);
  }
};

// export const getTimeFolder = () => {
//   const date = new Date();
//   const year = date.getFullYear();
//   const month = `0${date.getMonth() + 1}`.substr(-2);
//   const day = `0${date.getDate()}`.substr(-2);
//   const result = year + month + day + "";
// };

export const removeFileFolder = (relativePath: string) => {
  const diskPath = path.resolve(`${PUBLIC_FOLDER}${relativePath}`);
  fs.unlinkSync(diskPath);
};

export const copyFile = (fromPath: string, toPath: string) => {
  if (fs.existsSync(`${PUBLIC_FOLDER}${fromPath}`)) {
    fs.copyFileSync(`${PUBLIC_FOLDER}${fromPath}`, `${PUBLIC_FOLDER}${toPath}`);
  }
};
