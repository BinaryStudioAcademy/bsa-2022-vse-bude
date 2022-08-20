import React, { FC, ReactElement } from 'react';
import { Modal, Pressable, View } from 'react-native';
import { ColorPalette } from '@vse-bude/shared';
import { globalStyles } from '~/styles/styles';
import { CrossIcon } from '../components';
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
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={[globalStyles.flex1, styles.wrapper]}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Upload Photo</Text>
            <Pressable onPress={onClose}>
              <CrossIcon size={24} color={ColorPalette.RED_100} />
            </Pressable>
          </View>
          <View style={styles.buttonsBlock}>
            <Pressable onPress={handlePickFromGallery} style={styles.btn}>
              <Text style={styles.btnText}>Choose from device</Text>
            </Pressable>
            <Pressable onPress={handleOpenCamera} style={styles.btn}>
              <Text style={styles.btnText}>Open camera</Text>
            </Pressable>
            {isPhoto && (
              <Pressable style={styles.btn} onPress={handleRemovePicture}>
                <Text style={styles.btnText}>Remove existing photo</Text>
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export { PhotoPickerModal };
