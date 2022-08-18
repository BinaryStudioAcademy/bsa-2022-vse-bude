import { PermissionsAndroid } from 'react-native';
import { notification } from '~/services/services';

const requestCameraStoragePermission = async () => {
  try {
    const grantedGallery = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'App Gallery Permission',
        message: 'App needs access to your photos',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (grantedGallery === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    return false;
  } catch (err) {
    notification.error(err as string);
  }
};

export { requestCameraStoragePermission };
