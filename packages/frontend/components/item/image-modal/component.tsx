import { Modal, IconButton } from '@primitives';
import { IconName, IconColor } from '@enums';
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
}: ImageModalProps) => (
  <Modal visible={isOpen}>
    <div css={styles.modalImageWrapper}>
      <img src={image} alt="item" css={styles.modalImage} />
      <div css={styles.modalClose}>
        <IconButton
          ariaLabel="closeModal"
          icon={IconName.XMARK}
          color={IconColor.ORANGE}
          backgroundColor={'lightgray'}
          size="md"
          onClick={() => setModalVisible(false)}
        ></IconButton>
      </div>
    </div>
  </Modal>
);
