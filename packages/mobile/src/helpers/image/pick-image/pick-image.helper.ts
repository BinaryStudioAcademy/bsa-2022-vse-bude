import {
  launchImageLibrary,
  launchCamera,
  Asset,
} from 'react-native-image-picker';
import { notification } from '~/services/services';
import { CAMERA_OPTIONS, IMAGE_OPTIONS } from '~/common/constants/constants';
import i18n from 'i18next';

export const pickImageLibrary = async (): Promise<Asset | null> => {
  const response = await launchImageLibrary(IMAGE_OPTIONS);
  if (response.errorCode && response.errorMessage) {
    notification.error(response.errorMessage, response.errorCode);
  }
  if (response.didCancel) {
    notification.info(i18n.t('common:errors.DID_CANCEL'));
  }

  return response?.assets?.[0] || null;
};

export const pickImageCamera = async (): Promise<Asset | null> => {
  const response = await launchCamera(CAMERA_OPTIONS);

  if (response.errorCode && response.errorMessage) {
    notification.error(response.errorMessage, response.errorCode);
  }
  if (response.didCancel) {
    notification.info(i18n.t('common:errors.DID_CANCEL'));
  }

  return response?.assets?.[0] || null;
};