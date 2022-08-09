type ProcessEnvKey = 'NODE_ENV' | 'PORT';

type AuthEnvKeys = 'JWT_SECRET_KEY';

type EnvKeys = ProcessEnvKey | AuthEnvKeys;

export const getEnv = (key: EnvKeys) => process.env[key];
