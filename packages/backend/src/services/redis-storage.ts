import { createClient } from 'redis';
import { getEnv } from '@helpers';

type RedisClientType = ReturnType<typeof createClient>;

export class RedisStorageService {
  private client: RedisClientType;

  constructor() {
    const redisPort = Number(getEnv('REDIS_PORT')) || 6379;
    const redisHost = getEnv('REDIS_HOST');
    const redisPassword = getEnv('REDIS_PASSWORD');

    const redisConnectionParams = {
      socket: {
        port: redisPort,
        host: redisHost,
      },
      password: redisPassword,
    };

    this.client = createClient(redisConnectionParams);

    this.client.on('error', (err) => console.log('redis client error', err));

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
