import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { notification } from '~/services/services';
import { CAMERA_OPTIONS, IMAGE_OPTIONS } from '~/common/constants/constants';

export const pickImageLibrary = async () => {
  const response = await launchImageLibrary(IMAGE_OPTIONS);
  if (response.errorCode && response.errorMessage) {
    return notification.error(response.errorMessage, response.errorCode);
  }
  if (response.didCancel) {
    return notification.info('Cancelled by user');
  }

  return response.assets ? response.assets[0] : null;
};

export const pickImageCamera = async () => {
  const response = await launchCamera(CAMERA_OPTIONS);

  if (response.errorCode && response.errorMessage) {
    return notification.error(response.errorMessage, response.errorCode);
  }
  if (response.didCancel) {
    return notification.info('Cancelled by user');
  }

  return response.assets ? response.assets[0] : null;
};
