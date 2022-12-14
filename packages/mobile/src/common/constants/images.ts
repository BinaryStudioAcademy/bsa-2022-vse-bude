import { CameraOptions, ImageLibraryOptions } from 'react-native-image-picker';

export const IMAGE_OPTIONS: ImageLibraryOptions = {
  selectionLimit: 1,
  mediaType: 'photo',
  includeBase64: false,
};

export const CAMERA_OPTIONS: CameraOptions = {
  mediaType: 'photo',
  saveToPhotos: true,
  includeBase64: false,
};

export const ALLOW_IMAGE_TYPES = ['image/png', 'image/jpg', 'image/jpeg'];
