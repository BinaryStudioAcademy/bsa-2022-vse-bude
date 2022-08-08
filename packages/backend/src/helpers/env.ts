type ProcessEnvKey =
  | 'NODE_ENV'
  | 'PORT'
  | 'REDIS_PORT'
  | 'REDIS_HOST'
  | 'REDIS_PASSWORD';

export const getEnv = (key: ProcessEnvKey) => process.env[key];
