import type { RedisClientOptions } from 'redis';
import { createClient } from 'redis';
import { getEnv, logger } from '@helpers';

type RedisClientType = ReturnType<typeof createClient>;

export class RedisStorageService {
  private client: RedisClientType;

  constructor() {
    const redisPort = Number(getEnv('REDIS_PORT')) || 6379;
    const redisHost = getEnv('REDIS_HOST');
    const redisPassword = getEnv('REDIS_PASSWORD');
    const redisUsername = getEnv('REDIS_USERNAME');

    const redisConnectionParams: RedisClientOptions = {
      socket: {
        port: redisPort,
        host: redisHost,
      },
      password: redisPassword,
      username: redisUsername,
    };

    this.client = createClient(redisConnectionParams);

    this.client.on('error', (err) =>
      logger.error({ message: `Redis client error: ${err.message}`, ...err }),
    );

    this.client.connect().then(() => {
      console.log('redis client connected!');
    });
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
      await this.client.pExpire(key, expirationTimeMs);
    }

    return data;
  }

  del(key: string): Promise<number> {
    return this.client.del(key);
  }

  async isKeyExists(key: string) {
    return this.client.exists(key);
  }
}
