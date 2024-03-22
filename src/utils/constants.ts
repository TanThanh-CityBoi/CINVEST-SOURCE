import { CookieOptions } from 'express';

export enum METHOD {
  PATCH = 'patch',
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

export const UPLOADER_MAX_FILE_SIZE = 4 * 1000 * 1000; //4MB
export const UPLOADER_IMAGE_QUALITY = 30;

/**
 * Environment variables
 */
export const HOST = process.env.HOST || '0.0.0.0';
export const GRPC_HOST = process.env.GRPC_HOST || '0.0.0.0:4001';
export const PORT = process.env.PORT as string;
export const GRPC_NEWS_HOST = process.env.GRPC_NEWS_HOST as string;

// URL
export const APP_URI = process.env.APP_URI as string;
export const APP_URI_LOCALHOST = process.env.APP_URI_LOCALHOST as string;
export const API_URI = process.env.API_URI as string;

// DB
export const REDIS_URL =
  (process.env.REDIS_URL as string) || 'redis://localhost:6379';
export const REDIS_HOST = REDIS_URL.substring(8, REDIS_URL.length - 5);
export const REDIS_PORT = parseInt(REDIS_URL.substring(REDIS_URL.length - 4));
export const TYPEORM_CONNECTION = process.env.TYPEORM_CONNECTION as string;
export const TYPEORM_HOST = process.env.TYPEORM_HOST as string;
export const TYPEORM_USERNAME = process.env.TYPEORM_USERNAME as string;
export const TYPEORM_PASSWORD = process.env.TYPEORM_PASSWORD as string;
export const TYPEORM_DATABASE = process.env.TYPEORM_DATABASE as string;
export const TYPEORM_PORT = process.env.TYPEORM_PORT as string;
export const TYPEORM_MIGRATIONS = process.env.TYPEORM_MIGRATIONS as string;
export const TYPEORM_ENTITIES = process.env.TYPEORM_ENTITIES as string;
export const TYPEORM_MIGRATIONS_RUN = process.env
  .TYPEORM_MIGRATIONS_RUN as string;
export const TYPEORM_SYNCHRONIZE =
  Boolean(process.env.TYPEORM_SYNCHRONIZE) || false;
// LOG
export const LOG_QUEUE = process.env.LOG_QUEUE as string;

// JWT
export const JWT_ACCESS_TOKEN_EXPIRES_IN = 60 * 60 * 3; // in seconds , 5 minutes
export const JWT_REFRESH_TOKEN_EXPIRES_IN = 60 * 60 * 24; // in seconds , 1 day
export const JWT_MAIL_VERIFICATION_EXPIRES_IN = 60 * 10; // in seconds , 1 minutes
export const JWT_TEMP_LOGIN_EXPIRES_IN = 60; // in seconds , 1 minutes
export const JWT_SECRET_ACCESS_TOKEN = process.env
  .JWT_SECRET_ACCESS_TOKEN as string;
export const JWT_SECRET_REFRESH_TOKEN = process.env
  .JWT_SECRET_REFRESH_TOKEN as string;
export const JWT_SECRET_MAIL_VERIFICATION = process.env
  .JWT_SECRET_MAIL_VERIFICATION as string;
export const JWT_SECRET_TEMP_LOGIN = process.env
  .JWT_SECRET_TEMP_LOGIN as string;
export const REDIS_ACCESS_TOKEN_PREFIX = 'cinvest:access_token:';
export const REDIS_REFRESH_TOKEN_PREFIX = 'cinvest:refresh_token:';
export const REDIS_MAIL_VERIFICATION_PREFIX = 'cinvest:mail_verification:';
export const REDIS_TEMP_LOGIN_PREFIX = 'cinvest:temp_login:';

export const MAIL_HOST = process.env.MAIL_HOST as string;
export const MAIL_PORT = process.env.MAIL_PORT as string;
export const MAIL_ADDRESS = process.env.MAIL_ADDRESS as string;
export const MAIL_PASSWORD = process.env.MAIL_PASSWORD as string;
export const MAIL_FROM = process.env.MAIL_FROM as string;
export const AUTH_KEY_CREATE_ADMIN = process.env
  .AUTH_KEY_CREATE_ADMIN as string;

export const PUBLIC_FOLDER = process.env.PUBLIC_FOLDER as string;
export const TEMPLATES_FOLDER = process.env.TEMPLATES_FOLDER as string;
export const IMAGES_FOLDER = process.env.IMAGES_FOLDER as string;

export const cookieOptions: CookieOptions = {
  httpOnly: true,
  path: '/',
};

export const ENV = process.env.ENV as string;
export const DEV_KEY = process.env.DEV_KEY as string;

export const AUTH_GOOGLE_CLIENT_ID = process.env
  .AUTH_GOOGLE_CLIENT_ID as string;
export const AUTH_GOOGLE_CLIENT_SECRET = process.env
  .AUTH_GOOGLE_CLIENT_SECRET as string;

export const AUTH_GOOGLE_CLIENT_ID_LOCALHOST = process.env
  .AUTH_GOOGLE_CLIENT_ID_LOCALHOST as string;
export const AUTH_GOOGLE_CLIENT_SECRET_LOCALHOST = process.env
  .AUTH_GOOGLE_CLIENT_SECRET_LOCALHOST as string;

export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME as string;
export const UPLOAD_FOLDER_NAME = process.env.UPLOAD_FOLDER_NAME as string;

export const TTL_PRESIGNED = process.env.TTL_PRESIGNED || 300;
export const NODE_ENV = process.env.NODE_ENV;
