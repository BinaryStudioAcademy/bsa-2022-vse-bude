/* eslint-disable no-extra-boolean-cast */
import React, { FC, useState, useCallback } from 'react';
import { Image } from 'react-native';
import { image as imageService, notification } from '~/services/services';
import {
  View,
  UserIcon,
  Pressable,
  CameraIcon,
  FlagBackgroundView,
  PhotoPickerModal,
  Spinner,
} from '~/components/components';
import { requestCameraStoragePermission } from '~/permissions/android-permissions';
import { globalStyles } from '~/styles/styles';
import { pickImageCamera, pickImageLibrary } from '~/helpers/helpers';
import { styles } from './styles';

const ProfileImage: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [photoUri, setPhotoUri] = useState('');
  const [isPhoto, setIsPhoto] = useState(false);
  const [IsUploading, setIsUploading] = useState(false);

  const toggleModal = () => {
    return setShowModal(!showModal);
  };

  const onCameraOpen = useCallback(async () => {
    const permission = await requestCameraStoragePermission();
    if (permission) {
      setIsUploading(true);
      const file = await pickImageCamera();
      if (!file) {
        setIsUploading(false);

        return;
      }
      const link = await imageService.uploadImage(file);

      setIsPhoto(true);
      setPhotoUri(link);
      setIsUploading(false);
      setShowModal(false);
    } else {
      notification.error('Storage permission denied');
    }
  }, []);

  const onGalleryOpen = useCallback(async () => {
    const file = await pickImageLibrary();

    if (!file) {
      setIsUploading(false);

      return;
    }
    const link = await imageService.uploadImage(file);

    setIsPhoto(true);
    setPhotoUri(link);
    setIsUploading(false);
    setShowModal(false);
  }, []);

  const handleRemovePhoto = () => {
    setPhotoUri('');
    setIsPhoto(false);
  };

  return (
    <View style={[styles.container, globalStyles.px5, globalStyles.mt5]}>
      <FlagBackgroundView style={styles.flag} />
      <View style={styles.photoWrapper}>
        <View style={styles.photoContainer}>
          {photoUri ? (
            <Image source={{ uri: photoUri }} style={styles.photo} />
          ) : IsUploading ? (
            <Spinner size={130} />
          ) : (
            <UserIcon size={130} />
          )}
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
          isPhoto={isPhoto}
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
