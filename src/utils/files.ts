import fs from 'fs';
import path from 'path';
import { Logger } from 'pino';

import { IMAGES_FOLDER, PUBLIC_FOLDER } from './constants';

export const DEFAULT_IMAGE_NAME = 'default-image.png';

// post thumbnail
export const STORAGE_POST_THUMBNAIL_FOLDER = 'storage/posts/thumbnails';
export const DEFAULT_POST_THUMBNAIL_PATH = `${STORAGE_POST_THUMBNAIL_FOLDER}/${DEFAULT_IMAGE_NAME}`;
const initPostThumbnail = async () => {
  if (!fs.existsSync(`${PUBLIC_FOLDER}/${STORAGE_POST_THUMBNAIL_FOLDER}`)) {
    fs.mkdirSync(`${PUBLIC_FOLDER}/${STORAGE_POST_THUMBNAIL_FOLDER}`, {
      recursive: true,
    });
  }
  if (!fs.existsSync(`${PUBLIC_FOLDER}/${DEFAULT_POST_THUMBNAIL_PATH}`)) {
    fs.copyFileSync(
      `${IMAGES_FOLDER}/${DEFAULT_IMAGE_NAME}`,
      `${PUBLIC_FOLDER}/${DEFAULT_POST_THUMBNAIL_PATH}`,
    );
  }
};

// post content
export const STORAGE_POST_CONTENT_FOLDER = 'storage/posts/content';

// newsBrand thumbnail
export const STORAGE_NEWS_BRAND_THUMBNAIL_FOLDER =
  'storage/news-brands/thumbnails';
export const DEFAULT_NEWS_BRAND_THUMBNAIL_PATH = `${STORAGE_NEWS_BRAND_THUMBNAIL_FOLDER}/${DEFAULT_IMAGE_NAME}`;
const initNewsBrandThumbnail = async () => {
  if (
    !fs.existsSync(`${PUBLIC_FOLDER}/${STORAGE_NEWS_BRAND_THUMBNAIL_FOLDER}`)
  ) {
    fs.mkdirSync(`${PUBLIC_FOLDER}/${STORAGE_NEWS_BRAND_THUMBNAIL_FOLDER}`, {
      recursive: true,
    });
  }
  if (!fs.existsSync(`${PUBLIC_FOLDER}/${DEFAULT_NEWS_BRAND_THUMBNAIL_PATH}`)) {
    fs.copyFileSync(
      `${IMAGES_FOLDER}/${DEFAULT_IMAGE_NAME}`,
      `${PUBLIC_FOLDER}/${DEFAULT_NEWS_BRAND_THUMBNAIL_PATH}`,
    );
  }
};

// newsBrand description
export const STORAGE_NEWS_BRAND_DESCRIPTION_FOLDER =
  'storage/news-brands/description';

// banner image
export const STORAGE_BANNER_IMAGE_FOLDER = 'storage/banners/images';
export const DEFAULT_BANNER_IMAGE_PATH = `${STORAGE_BANNER_IMAGE_FOLDER}/${DEFAULT_IMAGE_NAME}`;
const initBannerImage = async () => {
  if (!fs.existsSync(`${PUBLIC_FOLDER}/${STORAGE_BANNER_IMAGE_FOLDER}`)) {
    fs.mkdirSync(`${PUBLIC_FOLDER}/${STORAGE_BANNER_IMAGE_FOLDER}`, {
      recursive: true,
    });
  }
  if (!fs.existsSync(`${PUBLIC_FOLDER}/${DEFAULT_BANNER_IMAGE_PATH}`)) {
    fs.copyFileSync(
      `${IMAGES_FOLDER}/${DEFAULT_IMAGE_NAME}`,
      `${PUBLIC_FOLDER}/${DEFAULT_BANNER_IMAGE_PATH}`,
    );
  }
};

// author thumbnail
export const STORAGE_AUTHOR_THUMBNAIL_FOLDER = 'storage/authors/thumbnails';
export const DEFAULT_AUTHOR_THUMBNAIL_PATH = `${STORAGE_AUTHOR_THUMBNAIL_FOLDER}/${DEFAULT_IMAGE_NAME}`;
const initAuthorThumbnail = async () => {
  if (!fs.existsSync(`${PUBLIC_FOLDER}/${STORAGE_AUTHOR_THUMBNAIL_FOLDER}`)) {
    fs.mkdirSync(`${PUBLIC_FOLDER}/${STORAGE_AUTHOR_THUMBNAIL_FOLDER}`, {
      recursive: true,
    });
  }
  if (!fs.existsSync(`${PUBLIC_FOLDER}/${DEFAULT_AUTHOR_THUMBNAIL_PATH}`)) {
    fs.copyFileSync(
      `${IMAGES_FOLDER}/${DEFAULT_IMAGE_NAME}`,
      `${PUBLIC_FOLDER}/${DEFAULT_AUTHOR_THUMBNAIL_PATH}`,
    );
  }
};

export async function initFiles(logger: Logger) {
  logger.info('Check files');
  await initPostThumbnail();
  await initBannerImage();
  await initAuthorThumbnail();
  await initNewsBrandThumbnail();
}

export const removeFile = (filePath: string) => {
  const diskPath = path.resolve(`${PUBLIC_FOLDER}${filePath}`);
  fs.unlinkSync(diskPath);
};
