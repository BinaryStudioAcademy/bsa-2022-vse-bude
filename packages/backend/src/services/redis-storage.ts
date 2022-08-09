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

    const data = await this.client.get(key);
    try {
      return JSON.parse(data);
    } catch {
      return data;
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
      await this.client.set(key, JSON.stringify(data));
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
