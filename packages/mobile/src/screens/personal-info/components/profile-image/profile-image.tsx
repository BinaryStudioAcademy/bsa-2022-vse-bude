/* eslint-disable no-extra-boolean-cast */
import React, { FC, useState, useCallback } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Image } from 'react-native';
import {
  View,
  LinearGradient,
  UserIcon,
  Pressable,
  CameraIcon,
  PhotoPickerModal,
} from '~/components/components';
import { useCustomTheme } from '~/hooks/hooks';
import { notification } from '~/services/services';
import {
  requestCameraStoragePermission,
} from '~/permissions/android-permissions';
import { globalStyles } from '~/styles/styles';
import { CAMERA_OPTIONS, IMAGE_OPTIONS } from '../../common/constants';
import { styles } from './styles';

const ProfileImage: FC = () => {
  const { colors } = useCustomTheme();
  const [showModal, setShowModal] = useState(false);
  const [photoUri, setPhotoUri] = useState('');

  const toggleModal = () => {
    return setShowModal(!showModal);
  };

  const onCameraOpen = useCallback(async () => {
    const permission = await requestCameraStoragePermission();
    if (permission) {
      launchCamera(CAMERA_OPTIONS, (response) => {
        if (response.errorCode && response.errorMessage) {
          return notification.error(response.errorMessage, response.errorCode);
        }
        if (response.didCancel) {
          return notification.info('Cancelled by user');
        }
        if (response?.assets) {
          setPhotoUri(response?.assets[0]?.uri as string);
        }
      })
        .finally(() => setShowModal(false));
    } else {
      notification.error('Storage permission denied');
    }
  }, []);

  const onGalleryOpen = useCallback(() => {
    launchImageLibrary(IMAGE_OPTIONS, (response) => {
      if (response.errorCode && response.errorMessage) {
        return notification.error(response.errorMessage, response.errorCode);
      }
      if (response.didCancel) {
        return notification.info('Cancelled by user');
      }
      if (response?.assets) {
        return setPhotoUri(response.assets[0].uri as string);
      }
    })
      .finally(() => setShowModal(false));
  }, []);

  return (
    <View style={[styles.container, globalStyles.px5, globalStyles.mt5]}>
      <LinearGradient
        start={{ x: 0, y: 0.4 }}
        end={{ x: 0, y: 0.9 }}
        colors={[colors.flagTop, colors.flagBottom]}
        style={styles.flag}
      />
      <View style={styles.photoWrapper}>
        <View style={styles.photoContainer}>
          {photoUri ?
            (<Image source={{ uri: photoUri }} style={styles.photo} />)
            :
            (<UserIcon size={130} />)
          }
        </View>
        <Pressable
          style={[
            styles.photoButton,
            globalStyles.alignItemsCenter,
            globalStyles.justifyContentCenter,
          ]}
          onPress={toggleModal}
        >
          <CameraIcon size={18} style={styles.icon} />
        </Pressable>
        <PhotoPickerModal
          isVisible={showModal}
          onClose={toggleModal}
          handleOpenCamera={onCameraOpen}
          handlePickFromGallery={onGalleryOpen}
        />
      </View>
    </View>
  );
};

export { ProfileImage };
