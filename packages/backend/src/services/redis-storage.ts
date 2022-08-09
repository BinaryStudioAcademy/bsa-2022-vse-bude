import { createClient } from 'redis';
import { getEnv } from '@helpers';

type RedisClientType = ReturnType<typeof createClient>;

type RedisStorageGetDataType =
  | string
  | Array<string | number | Record<string, unknown>>
  | Record<string, unknown>;

type RedisStorageSetDataType = RedisStorageGetDataType | number;

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
