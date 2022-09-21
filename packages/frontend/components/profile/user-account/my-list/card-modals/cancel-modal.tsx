import { Button, IconButton } from '@components/primitives';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { addItemToArchive, setVisabilityCancelModal, setItemId } from '@store';
import { useTranslation } from 'next-i18next';
import { IconColor, IconName } from '@enums';
import type { RootState } from '@types';
import type { ProductToArchive } from '@vse-bude/shared';
import * as styles from './style';

export const CancelModal = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const itemId = useTypedSelector((state: RootState) => state.myList.itemId);

  const onAddToArchive = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const reqDto: ProductToArchive = {
      itemId,
      updatedAt: new Date().toISOString(),
    };
    dispatch(addItemToArchive({ data: reqDto }));
    dispatch(setVisabilityCancelModal());
  };

  const onCloseModal = () => {
    dispatch(setVisabilityCancelModal());
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
          <span css={styles.header}>{t('my-list:modal.header')}</span>
        </div>

        <div css={styles.actionButtons}>
          <Button size="small" type="button" onClick={onAddToArchive}>
            {t('my-list:modal.buttons.add')}
          </Button>
        </div>
      </form>
    </div>
  );
};
