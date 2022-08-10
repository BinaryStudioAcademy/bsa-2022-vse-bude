type ProcessEnvKey = 'NODE_ENV' | 'PORT';

type RedisEnvKey = 'REDIS_PORT' | 'REDIS_HOST' | 'REDIS_PASSWORD';

type EnvKey = ProcessEnvKey | RedisEnvKey;

export const getEnv = (key: EnvKey) => process.env[key];
