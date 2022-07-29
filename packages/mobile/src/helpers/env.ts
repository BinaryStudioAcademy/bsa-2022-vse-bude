import Config from 'react-native-config';

type ProcessEnvKey = 'NODE_ENV' | 'API_ROUTE';

export const getEnv = (key: ProcessEnvKey) => Config[key];
