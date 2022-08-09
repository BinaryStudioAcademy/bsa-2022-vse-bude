import type { createClient } from 'redis';

export type RedisClientType = ReturnType<typeof createClient>;

type RedisStorageGetDataType =
  | string
  | Array<string | number | Record<string, unknown>>
  | Record<string, unknown>;

type RedisStorageSetDataType =
  | number
  | string
  | Array<string | number | Record<string, unknown>>
  | Record<string, unknown>;

export class RedisStorageService {
  private client: RedisClientType;

  constructor(redisClient: RedisClientType) {
    this.client = redisClient;
  }

  async get(key: string): Promise<RedisStorageGetDataType> {
    const isExist = await this.isKeyExists(key);
    if (!isExist) {
      return null;
    }
    const data = await this.client.get(key);

    return JSON.parse(data);
  }

  // expirationTime in milliseconds
  async set(
    key: string,
    data: RedisStorageSetDataType,
    expirationTime?: number,
  ): Promise<RedisStorageSetDataType> {
    await this.client.set(key, JSON.stringify(data));
    if (expirationTime) {
      await this.client.pExpire(key, expirationTime);
    }

    return data;
  }

  del(key: string): Promise<RedisStorageSetDataType> {
    return this.client.del(key);
  }

  async isKeyExists(key: string) {
    return this.client.exists(key);
  }
}
