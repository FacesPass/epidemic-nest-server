import * as env from 'dotenv';
env.config();

export const isDev = process.env.NODE_ENV === 'development';

const configuration = {
  port: process.env.PORT || 3000,
  mongoUrl: isDev ? process.env.MONGO_URL_DEV : process.env.MONGO_URL_PRO,
  redisUrl: isDev ? process.env.REDIS_URL_DEV : process.env.REDIS_URL_PRO,
  jwtSecret: process.env.JWT_SECRET,
  baiduApiKey: process.env.BaiduApiKey,
  baiduApiSecret: process.env.BaiduApiSecret,
  qqMapSecret: process.env.qqMapSecret,
  qqMapKey: process.env.qqMapKey,
  aliOssRegion: process.env.aliOssRegion,
  aliOssAccessKeyId: process.env.aliOssAccessKeyId,
  aliOssAccessKeySecret: process.env.aliOssAccessKeySecret,
  aliOssBucket: process.env.aliOssBucket,
};

export default configuration;
