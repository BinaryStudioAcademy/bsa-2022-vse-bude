type ProcessEnvKey = 'NODE_ENV' | 'PORT';

export const getEnv = (key: ProcessEnvKey) => process.env[key];
