import { Input, Button, IconButton } from '@components/primitives';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { addItemToArchive, setVisabilityCancelModal, setItemId } from '@store';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { IconColor, IconName } from '@enums';
import type { RootState } from '@types';
import type { ProductToArchive } from '@vse-bude/shared';
import * as styles from './style';

interface FormProps {
  cancelReason: string | null;
}

export const CancelModal = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const itemId = useTypedSelector((state: RootState) => state.myList.itemId);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      cancelReason: '',
    },
  });

  const onAddToArchive: SubmitHandler<FormProps> = (data) => {
    const reqDto: ProductToArchive = {
      ...data,
      itemId,
      endDate: new Date().toISOString(),
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
      <form onSubmit={handleSubmit(onAddToArchive)}>
        <div css={styles.modalHeader}>
          <span css={styles.header}>{t('my-list:modal.header')}</span>
        </div>

        <div css={styles.inputRow}>
          <Input
            placeholder={t('my-list:modal.placeholders.reason')}
            type="text"
            variant="primary"
            {...register('cancelReason')}
          />
        </div>

        <div css={styles.actionButtons}>
          <Button size="small" type="submit">
            {t('my-list:modal.buttons.add')}
          </Button>
          <Button type="reset" size="small">
            {t('my-list:modal.buttons.clear')}
          </Button>
        </div>
      </form>
    </div>
  );
};
