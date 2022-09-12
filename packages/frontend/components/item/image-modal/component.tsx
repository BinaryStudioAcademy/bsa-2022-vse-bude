import { Modal, IconButton, Loader } from '@primitives';
import { IconName, IconColor } from '@enums';
import { useTranslation } from 'next-i18next';
import Image from 'next/future/image';
import { useState } from 'react';
import * as styles from './styles';

interface ImageModalProps {
  image: string;
  isOpen: boolean;
  setModalVisible: (value: boolean) => void;
}

export const ImageModal = ({
  image,
  isOpen,
  setModalVisible,
}: ImageModalProps) => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Modal visible={isOpen}>
      <div css={styles.modalImageWrapper}>
        {!isLoaded && <Loader />}
        <Image
          src={image}
          css={[styles.modalImage, !isLoaded && styles.hideImage]}
          alt="item"
          fill
          quality={'100'}
          onLoad={() => setIsLoaded(true)}
        />
        <div css={styles.modalClose}>
          <IconButton
            ariaLabel={t('item:buttons.closeImageModal')}
            icon={IconName.XMARK}
            color={IconColor.ORANGE}
            backgroundColor={'lightgray'}
            size="md"
            onClick={() => setModalVisible(false)}
          />
        </div>
      </div>
    </Modal>
  );
};
