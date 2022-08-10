type ProcessEnvKey = 'NODE_ENV' | 'PORT';

type RedisEnvKey = 'REDIS_PORT' | 'REDIS_HOST' | 'REDIS_PASSWORD';

type TwilioEnvKey =
  | 'TWILIO_ACCOUNT_SID'
  | 'TWILIO_AUTH_TOKEN'
  | 'TWILIO_MESSAGING_SERVICE_SID';

type EnvKey = ProcessEnvKey | RedisEnvKey | TwilioEnvKey;

export const getEnv = (key: EnvKey) => process.env[key];
