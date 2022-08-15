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

type S3StorageEnvKey =
  | 'S3_API_KEY'
  | 'S3_API_SECRET'
  | 'S3_API_LINK'
  | 'S3_BUCKET_NAME';

type EnvKeys =
  | ProcessEnvKey
  | AuthEnvKeys
  | RedisEnvKey
  | TwilioEnvKey
  | S3StorageEnvKey;

export const getEnv = (key: EnvKeys) => process.env[key];
