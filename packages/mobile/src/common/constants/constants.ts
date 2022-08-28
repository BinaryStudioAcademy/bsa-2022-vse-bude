import { Platform } from 'react-native';

const IS_ANDROID = Platform.OS === 'android';
const IS_IOS = Platform.OS === 'ios';

const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 16;

const MIN_NAME_LENGTH = 1;
const MAX_NAME_LENGTH = 40;

export {
  IS_ANDROID,
  IS_IOS,
  MIN_PASSWORD_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_NAME_LENGTH,
  MAX_NAME_LENGTH,
};
