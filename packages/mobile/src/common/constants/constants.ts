import { Platform } from 'react-native';
import { CameraOptions, ImageLibraryOptions } from 'react-native-image-picker';

const IS_ANDROID = Platform.OS === 'android';
const IS_IOS = Platform.OS === 'ios';

export { IS_ANDROID, IS_IOS };

export const IMAGE_OPTIONS: ImageLibraryOptions = {
  selectionLimit: 1,
  mediaType: 'photo',
  includeBase64: false,
  maxHeight: 1200,
  maxWidth: 1200,
  quality: 0.4,
};

export const CAMERA_OPTIONS: CameraOptions = {
  mediaType: 'photo',
  saveToPhotos: true,
  maxHeight: 1200,
  maxWidth: 1200,
  quality: 0.4,
  includeBase64: false,
};
