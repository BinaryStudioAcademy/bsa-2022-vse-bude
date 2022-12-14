import React, { FC, ReactElement } from 'react';
import { globalStyles } from '~/styles/styles';
import { useTranslation } from '~/hooks/hooks';
import { Modal, Pressable, Text, View } from '~/components/components';
import { styles } from './styles';

type PhotoPickerModalProps = {
  isVisible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

const AuctionLeaveModal: FC<PhotoPickerModalProps> = ({
  isVisible,
  onCancel,
  onConfirm,
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
              {t('screens:product_info.LEAVE_MODAL_TEXT')}
            </Text>
          </View>
          <View style={styles.buttonsBlock}>
            <Pressable onPress={onCancel} style={styles.btn}>
              <Text style={styles.btnText}>
                {t('common:components.BUTTON_CANCEL')}
              </Text>
            </Pressable>
            <Pressable onPress={onConfirm} style={[styles.btn]}>
              <Text style={[styles.btnText, styles.confirmBtn]}>
                {t('screens:product_info.LEAVE_TEXT')}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export { AuctionLeaveModal };
