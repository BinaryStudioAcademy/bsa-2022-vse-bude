import { useTypedSelector } from '@hooks';
import { Button, Loader, Modal } from '@primitives';
import { useTranslation } from 'next-i18next';
import { actionBtns, header, mainText } from './styles';

export interface ConfirmationModalProps {
  onClose: () => void;
  onConfirm: () => void;
  text: string;
}

const ConfirmationModal = ({
  text,
  onClose,
  onConfirm,
}: ConfirmationModalProps) => {
  const { t } = useTranslation('common');
  const { loadingAuctionLeave } = useTypedSelector((state) => state.product);

  return (
    <Modal visible={true}>
      <div css={header}>{t('modal.confirm.header')}</div>
      <div css={mainText}>{text}</div>
      <div css={actionBtns}>
        <Button
          disabled={loadingAuctionLeave}
          onClick={onConfirm}
          variant={loadingAuctionLeave ? 'filled' : 'danger'}
          size="small"
        >
          {loadingAuctionLeave ? (
            <Loader size="extraSmall" />
          ) : (
            t('modal.confirm.confirm')
          )}
        </Button>
        <Button disabled={loadingAuctionLeave} onClick={onClose} size="small">
          {t('modal.confirm.cancel')}
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
