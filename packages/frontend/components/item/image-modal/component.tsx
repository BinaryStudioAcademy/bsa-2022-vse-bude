import { Modal, IconButton } from '@primitives';
import { IconName, IconColor } from '@enums';
import { useTranslation } from 'next-i18next';

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

  return (
    <Modal visible={isOpen}>
      <div css={styles.modalImageWrapper}>
        {loading ? (
          <div>Loader</div>
        ) : (
          <>
            <img src={image} alt="item" css={styles.modalImage} ref={ref} />
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
          </>
        )}
      </div>
    </Modal>
  );
};
