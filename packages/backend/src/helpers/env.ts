type EmailEnvKey = 'EMAIL_SERVICE_API_KEY' | 'EMAIL_SERVICE_ADDRESS';

type ProcessEnvKey = 'NODE_ENV' | 'PORT';

export const getEnv = (key: ProcessEnvKey | EmailEnvKey) => process.env[key];
