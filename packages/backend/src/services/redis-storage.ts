import type { createClient } from 'redis';

export type RedisClientType = ReturnType<typeof createClient>;

export class RedisStorageService {
  private client: RedisClientType;

  constructor(redisClient: RedisClientType) {
    this.client = redisClient;

    this.client.on('error', (err) => console.log('Redis Client Error', err));

    this.client
      .connect()
      .then(() => {
        console.log('Redis client connected!');
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
