import { Platform } from 'react-native';

const IS_ANDROID = Platform.OS === 'android';
const IS_IOS = Platform.OS === 'ios';

export { IS_ANDROID, IS_IOS };
