import Redis from 'ioredis';
import { getEnv } from '@helpers';
import { type ConnectionOptions } from 'tls';

export class RedisStorageService {
  private client: Redis;

  constructor(useSsl: boolean) {
    const redisConnectionString = getEnv('REDIS_CONNECTION_STRING');

    const tls: ConnectionOptions = useSsl
      ? {
          rejectUnauthorized: false,
        }
      : null;

    this.client = new Redis(redisConnectionString, { tls });
  }

  async get<T>(key: string): Promise<T> {
    const isExist = await this.isKeyExists(key);
    if (!isExist) {
      return null;
    }

    const data = await this.client.get(key);

    return JSON.parse(data);
  }

  async set<T>(key: string, data: T, expirationTimeMs?: number): Promise<T> {
    await this.client.set(key, JSON.stringify(data));
    if (expirationTimeMs) {
      await this.client.pexpire(key, expirationTimeMs);
    }

    return data;
  }

  del(key: string): Promise<number> {
    return this.client.del(key);
  }

  async isKeyExists(key: string): Promise<number> {
    return this.client.exists(key);
  }

  async checkPing(): Promise<boolean> {
    return (await this.client.ping()) === 'PONG';
  }
}
