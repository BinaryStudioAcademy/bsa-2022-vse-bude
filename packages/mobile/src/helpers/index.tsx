import { Http } from '@vse-bude/shared';
import { getEnv } from './env';

// TO DO: add ability to use AsyncStorage
const http = new Http(getEnv('API_ROUTE'), {} as any);

export { http, getEnv };
