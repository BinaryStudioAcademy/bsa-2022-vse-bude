import Config from 'react-native-config';

const { API_ORIGIN_URL, API_PUBLIC_WEBSOCKETS_API_URL } = Config;

const ENV = {
  APP: {
    API_ORIGIN_URL,
  },
  SOCKET: {
    API_PUBLIC_WEBSOCKETS_API_URL,
  },
} as const;

export { ENV };
