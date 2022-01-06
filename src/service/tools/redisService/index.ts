import { Injectable } from '@nestjs/common';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { Redis } from 'ioredis';

@Injectable()
export class CacheService {
  constructor(@InjectRedis() private readonly client: Redis) {}

  async ping() {
    await this.client.ping();
  }

  async set(key: string, value: any, seconds?: number) {
    value = JSON.stringify(value);

    if (!seconds) {
      await this.client.set(key, value);
    } else {
      await this.client.set(key, value, 'EX', seconds);
    }
  }

  async get(key: string) {
    const data = await this.client.get(key);

    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }

  /**
   * 根据key删除redis缓存数据
   */
  public async rm(key: string) {
    await this.client.del(key);
  }

  /**
   * 清空redis的缓存
   */
  public async flushall() {
    await this.client.flushall();
  }
}

export default CacheService;
