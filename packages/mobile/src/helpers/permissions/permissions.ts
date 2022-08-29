import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { notification } from '~/services/services';

const requestExternalStoragePermission = async () => {
  try {
    const grantedGallery = await request(
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      {
        title: 'App Gallery Permission',
        message: 'App needs access to your photos',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    return grantedGallery === RESULTS.GRANTED;
  } catch (err) {
    notification.error(err as string);

    return false;
  }
};

export { requestExternalStoragePermission };
