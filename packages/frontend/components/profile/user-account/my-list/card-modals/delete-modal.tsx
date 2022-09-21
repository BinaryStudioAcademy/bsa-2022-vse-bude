import { Button, IconButton } from '@components/primitives';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { setVisabilityDeleteModal, setItemId, deleteItem } from '@store';
import { useTranslation } from 'next-i18next';
import { IconColor, IconName } from '@enums';
import type { RootState } from '@types';
import * as styles from './style';

export const DeleteModal = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const itemId = useTypedSelector((state: RootState) => state.myList.itemId);

  const onDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(deleteItem({ productId: itemId }));
    dispatch(setVisabilityDeleteModal());
  };

  const onCloseModal = () => {
    dispatch(setVisabilityDeleteModal());
    dispatch(setItemId(null));
  };

  return (
    <div css={styles.modalWrapper}>
      <IconButton
        ariaLabel="close-modal"
        color={IconColor.YELLOW}
        icon={IconName.XMARK}
        size="sm"
        onClick={onCloseModal}
        cssExtend={styles.closeButton}
        backgroundColor="darkgray"
      />
      <form noValidate>
        <div css={styles.modalHeader}>
          <span css={styles.header}>{t('my-list:modal.header_delete')}</span>
        </div>

        <div css={styles.actionButtons}>
          <Button size="small" type="button" onClick={onDelete}>
            {t('my-list:modal.buttons.delete')}
          </Button>
        </div>
      </form>
    </div>
  );
};
