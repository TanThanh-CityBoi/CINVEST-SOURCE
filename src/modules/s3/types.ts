export interface TPresignedUrl {
  putUrl: string;
  getUrl: string;
}

export type TResource =
  | 'bin'
  | 'posts/content'
  | 'posts/thumbs'
  | 'banners/thumbs'
  | 'profile/thumbs'
  | 'news_brand/thumbs'
  | 'profile/files'
  | 'profile/interested'
  | 'store/app';
export enum ResourceEnum {
  BIN = 'bin',
  POSTS_CONTENT = 'posts/content',
  POSTS_THUMB = 'posts/thumbs',
  BANNERS_THUMB = 'banners/thumbs',
  NEWS_BRAND_THUMB = 'news_brand/thumbs',
  PROFILE_THUMB = 'profile/thumbs',
  PROFILE_FIlE = 'profile/files',
  PROFILE_INTERESTED = 'profile/interested',
  STORE_APP = 'store/app',
}
