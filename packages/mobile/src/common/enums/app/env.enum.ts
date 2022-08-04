import Config from 'react-native-config';

const { API_ORIGIN_URL } = Config;

const ENV = {
  APP: {
    API_ORIGIN_URL,
  },
} as const;

export { ENV };
