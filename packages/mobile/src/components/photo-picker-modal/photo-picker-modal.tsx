import React, { FC, ReactElement } from 'react';
import { ColorPalette } from '@vse-bude/shared';
import { globalStyles } from '~/styles/styles';
import { useTranslation } from '~/hooks/hooks';
import { CrossIcon, Modal, Pressable, View } from '../components';
import { Text } from '../text/text';
import { styles } from './styles';

type PhotoPickerModalProps = {
  isVisible: boolean;
  isPhoto: boolean;
  handlePickFromGallery: () => void;
  handleOpenCamera: () => void;
  handleRemovePicture: () => void;
  onClose?: () => void;
};

const PhotoPickerModal: FC<PhotoPickerModalProps> = ({
  isVisible,
  isPhoto,
  handlePickFromGallery,
  handleOpenCamera,
  handleRemovePicture,
  onClose,
}): ReactElement => {
  const { t } = useTranslation();

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View
        style={[
          globalStyles.flex1,
          globalStyles.justifyContentCenter,
          globalStyles.alignItemsCenter,
        ]}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {t('common:components.UPLOAD_PHOTO')}
            </Text>
            <Pressable onPress={onClose}>
              <CrossIcon size={24} color={ColorPalette.RED_100} />
            </Pressable>
          </View>
          <View style={styles.buttonsBlock}>
            <Pressable onPress={handlePickFromGallery} style={styles.btn}>
              <Text style={styles.btnText}>
                {t('common:components.CHOOSE_FROM_GALLERY')}
              </Text>
            </Pressable>
            <Pressable onPress={handleOpenCamera} style={styles.btn}>
              <Text style={styles.btnText}>
                {t('common:components.OPEN_CAMERA')}
              </Text>
            </Pressable>
            {isPhoto && (
              <Pressable style={styles.btn} onPress={handleRemovePicture}>
                <Text style={styles.btnText}>
                  {t('common:components.REMOVE_PHOTO')}
                </Text>
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export { PhotoPickerModal };
