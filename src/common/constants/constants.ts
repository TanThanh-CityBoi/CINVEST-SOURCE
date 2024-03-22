import * as dotenv from 'dotenv';
dotenv.config();
export const HOST = process.env.HOST;
export const PORT = process.env.PORT;
export const PROFILE_SERVICE = process.env.PROFILE_SERVICE;
export const NEWS_SERVICE = process.env.NEWS_SERVICE;
export const SWAGGER_PATH = process.env.SWAGGER_PATH;
export const API_PREFIX = process.env.API_PREFIX;
export const VERSION = process.env.VERSION || '0.1';
export const AWS_REGION = process.env.AWS_REGION;
export const AWS_ACCESSKEY_ID = process.env.AWS_ACCESSKEY_ID;
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
export const VALIDATE_TOKEN = process.env.VALIDATE_TOKEN;
export const GRPC_URL = process.env.GRPC_URL;
export const DATABASE_HOST = process.env.DATABASE_HOST;
export const DATABASE_PORT = process.env.DATABASE_PORT;
export const DATABASE_USER_NAME = process.env.DATABASE_USER_NAME;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
export const DATABASE_NAME = process.env.DATABASE_NAME;
export const DATABASE_SYNCHRONIZE = true;
export const AWS_BUCKET_NAME_PUBLIC = process.env.AWS_BUCKET_NAME_PUBLIC;
export const AWS_COGNITO_USERPOOL_ID = process.env.AWS_COGNITO_USERPOOL_ID;
export const AWS_COGNITO_CLIENT_ID = process.env.AWS_COGNITO_CLIENT_ID;
export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
