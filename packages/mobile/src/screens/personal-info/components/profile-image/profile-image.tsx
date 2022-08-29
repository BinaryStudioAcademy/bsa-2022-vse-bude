import React, { FC, useState, useCallback } from 'react';
import { image as imageService, notification } from '~/services/services';
import {
  View,
  Pressable,
  CameraIcon,
  FlagBackgroundView,
  PhotoPickerModal,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import {
  requestExternalStoragePermission,
  pickImageCamera,
  pickImageLibrary,
} from '~/helpers/helpers';
import { useTranslation } from '~/hooks/hooks';
import { UserAvatar } from '../avatar/avatar';
import { styles } from './styles';

const ProfileImage: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [photoUri, setPhotoUri] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const { t } = useTranslation();

  const toggleModal = () => {
    return setShowModal((currentModal) => !currentModal);
  };

  const onCameraOpen = useCallback(async () => {
    setIsUploading(true);
    const file = await pickImageCamera();
    if (!file) {
      setIsUploading(false);

      return;
    }
    const link = await imageService.uploadImage(file);

    setPhotoUri(link);
    setIsUploading(false);
    setShowModal(false);
  }, []);

  const onGalleryOpen = useCallback(async () => {
    const isPermissionGranted = await requestExternalStoragePermission();

    if (isPermissionGranted) {
      setIsUploading(true);
      const file = await pickImageLibrary();
      if (!file) {
        setIsUploading(false);

        return;
      }
      const link = await imageService.uploadImage(file);

      setPhotoUri(link);
      setIsUploading(false);
      setShowModal(false);
    } else {
      notification.error(t('permission.STORAGE_DENIED'));
    }
  }, []);

  const handleRemovePhoto = () => {
    setPhotoUri('');
  };

  return (
    <View style={[styles.container, globalStyles.px5, globalStyles.mt5]}>
      <FlagBackgroundView style={styles.flag} />
      <View style={styles.photoWrapper}>
        <View style={styles.photoContainer}>
          <UserAvatar link={photoUri} isLoading={isUploading} />
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
          isPhoto={Boolean(photoUri)}
          onClose={toggleModal}
          handleOpenCamera={onCameraOpen}
          handlePickFromGallery={onGalleryOpen}
          handleRemovePicture={handleRemovePhoto}
        />
      </View>
    </View>
  );
};

export { ProfileImage };
