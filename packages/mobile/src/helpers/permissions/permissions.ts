import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { notification } from '~/services/services';

const requestExternalStoragePermission = async () => {
  try {
    const grantedGallery = await request(PERMISSIONS.ANDROID.CAMERA);

    return grantedGallery === RESULTS.GRANTED;
  } catch (err) {
    notification.error(err as string);

    return false;
  }
};

export { requestExternalStoragePermission };
