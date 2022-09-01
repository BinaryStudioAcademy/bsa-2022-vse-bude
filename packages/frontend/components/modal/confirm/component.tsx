import { Button, Modal } from '@primitives';
import { useTranslation } from 'next-i18next';
import { actionBtns, header, mainText } from './styles';

export interface ConfirmationModalProps {
  onClose: () => void;
  onConfirm: () => void;
  text: string;
}

export const ConfirmationModal = ({
  text,
  onClose,
  onConfirm,
}: ConfirmationModalProps) => {
  const { t } = useTranslation('common');

  return (
    <Modal visible={true}>
      <div css={header}>{t('modal.confirm.header')}</div>
      <div css={mainText}>{text}</div>
      <div css={actionBtns}>
        <Button onClick={onConfirm} variant="danger" size="small">
          {t('modal.confirm.confirm')}
        </Button>
        <Button onClick={onClose} size="small">
          {t('modal.confirm.cancel')}
        </Button>
      </div>
    </Modal>
  );
};
