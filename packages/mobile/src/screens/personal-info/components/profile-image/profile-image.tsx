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
import { UserAvatar } from '../avatar/avatar';
import { styles } from './styles';

const ProfileImage: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [photoUri, setPhotoUri] = useState('');
  const [IsUploading, setIsUploading] = useState(false);

  const toggleModal = () => {
    return setShowModal((showModal) => !showModal);
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
      notification.error('Storage permission denied');
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
          <UserAvatar link={photoUri} isLoading={IsUploading} />
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
