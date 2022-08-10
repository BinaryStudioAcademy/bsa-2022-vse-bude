type ProcessEnvKey = 'NODE_ENV' | 'PORT';

type AuthEnvKeys =
  | 'JWT_SECRET_KEY'
  | 'JWT_ACCESS_TOKEN_EXPIRATION_MIN'
  | 'REFRESH_TOKEN_EXPIRATION_MIN';

type EnvKeys = ProcessEnvKey | AuthEnvKeys;

export const getEnv = (key: EnvKeys) => process.env[key];
