type ProcessEnvKey = 'NODE_ENV' | 'PORT';

type RedisEnvKey = 'REDIS_PORT' | 'REDIS_HOST' | 'REDIS_PASSWORD';

export const getEnv = (key: ProcessEnvKey | RedisEnvKey) => process.env[key];
