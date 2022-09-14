import React, { FC, useState, useCallback } from 'react';
import { notification } from '~/services/services';
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
import { useAppDispatch, useTranslation, useEffect } from '~/hooks/hooks';
import { personalInfoActions } from '~/store/actions';
import { UserAvatar } from '../avatar/avatar';
import { styles } from './styles';

type Props = {
  avatar?: string;
};

const ProfileImage: FC<Props> = ({ avatar }) => {
  const [showModal, setShowModal] = useState(false);
  const [photoUri, setPhotoUri] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const toggleModal = () => {
    return setShowModal((currentModal) => !currentModal);
  };

  useEffect(() => {
    if (avatar) {
      return setPhotoUri(avatar);
    }

    return setPhotoUri('');
  }, [avatar]);

  const onCameraOpen = useCallback(async () => {
    const isPermissionGranted = await requestExternalStoragePermission();

    if (isPermissionGranted) {
      setIsUploading(true);
      const file = await pickImageCamera();
      if (!file) {
        setIsUploading(false);

        return;
      }
      dispatch(personalInfoActions.updateAvatar(file))
        .unwrap()
        .then(({ avatar }) => {
          if (avatar) {
            setPhotoUri(avatar);
          }
        })
        .catch((err) => {
          // eslint-disable-next-line
          console.warn(err);
        })
        .finally(() => {
          setIsUploading(false);
          setShowModal(false);
        });
    } else {
      notification.error(t('permission.STORAGE_DENIED'));
    }
  }, []);

  const onGalleryOpen = useCallback(async () => {
    setIsUploading(true);
    const file = await pickImageLibrary();
    if (!file) {
      setIsUploading(false);

      return;
    }

    dispatch(personalInfoActions.updateAvatar(file))
      .unwrap()
      .then(({ avatar }) => {
        if (avatar) {
          setPhotoUri(avatar);
        }
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.warn(err);
      })
      .finally(() => {
        setIsUploading(false);
        setShowModal(false);
      });
  }, []);

  const handleRemovePhoto = () => {
    dispatch(personalInfoActions.updateAvatar(null))
      .unwrap()
      .then(() => {
        setPhotoUri('');
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.warn(err);
      })
      .finally(() => {
        setIsUploading(false);
        setShowModal(false);
      });
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
