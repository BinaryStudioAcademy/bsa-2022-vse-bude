type EmailEnvKey = 'EMAIL_SERVICE_API_KEY' | 'EMAIL_SERVICE_ADDRESS';

type ProcessEnvKey = 'NODE_ENV' | 'PORT';

type RedisEnvKey = 'REDIS_PORT' | 'REDIS_HOST' | 'REDIS_PASSWORD';

type TwilioEnvKey =
  | 'TWILIO_ACCOUNT_SID'
  | 'TWILIO_AUTH_TOKEN'
  | 'TWILIO_MESSAGING_SERVICE_SID';

type AuthEnvKeys =
  | 'JWT_SECRET_KEY'
  | 'JWT_ACCESS_TOKEN_EXPIRATION_MIN'
  | 'REFRESH_TOKEN_EXPIRATION_MIN';

type EnvKeys = ProcessEnvKey | AuthEnvKeys | RedisEnvKey | TwilioEnvKey | EmailEnvKey;

export const getEnv = (key: EnvKeys) => process.env[key];