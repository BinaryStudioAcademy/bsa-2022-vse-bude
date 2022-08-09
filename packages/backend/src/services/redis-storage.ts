import type { createClient } from 'redis';

export type RedisClientType = ReturnType<typeof createClient>;

export class RedisStorageService {
  private client: RedisClientType;

  constructor(redisClient: RedisClientType) {
    this.client = redisClient;
  }

  async get(
    key: string,
  ): Promise<string | Array<any> | Record<string, unknown>> {
    const isExist = await this.isKeyExists(key);
    if (!isExist) {
      return null;
    }

    const dataType = await this.client.type(key);
    switch (dataType) {
      case 'string': {
        return this.client.get(key);
      }
      case 'list': {
        return this.client.lRange(key, 0, -1);
      }
      case 'hash': {
        return this.client.hGetAll(key);
      }
      default: {
        throw new Error('redis client error!');
      }
    }
  }

  // expirationTime in milliseconds
  async set(
    key: string,
    data: any,
    expirationTime?: number,
  ): Promise<string | Array<any> | Record<string, unknown>> {
    const dataType = typeof data;

    if (dataType === 'string' || dataType === 'number') {
      await this.client.set(key, data);
    } else if (dataType === 'object') {
      if (Array.isArray(data)) {
        console.log('here');
        await this.client.rPush(key, data);
      } else {
        await this.client.hSet(key, data);
      }
    } else {
      throw new Error('This type is not supported!');
    }

    if (expirationTime) {
      await this.client.pExpire(key, expirationTime);
    }

    return data;
  }

  del(key: string): Promise<any> {
    return this.client.del(key);
  }

  async isKeyExists(key: string) {
    return this.client.exists(key);
  }
}
