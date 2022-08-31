import { Button, Modal } from '@primitives';
import { actionBtns, header, mainText } from './styles';

export interface ConfirmationModalProps {
  onClose: () => void;
}

export const ConfirmationModal = ({ onClose }: ConfirmationModalProps) => (
  <Modal visible={true}>
    <div css={header}>Confirm your action</div>
    <div css={mainText}>
      Are you sure to leave the auction? All bids will be deleted!
    </div>
    <div css={actionBtns}>
      <Button variant="danger" size="small">
        Confirm
      </Button>
      <Button onClick={onClose} size="small">
        Cancel
      </Button>
    </div>
  </Modal>
);
