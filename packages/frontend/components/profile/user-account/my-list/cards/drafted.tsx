import { useTranslation } from 'next-i18next';
import { IconButton, Button } from '@primitives';
import { IconColor, IconName } from '@enums';
import {
  ItemImage,
  ItemHeader,
  Price,
  ItemStatus,
  ItemDescription,
  Date,
} from '../primitives';
import type { ItemCard } from './types';
import * as styles from './styles';

export const Drafted = ({ data }: { data: ItemCard }) => {
  const { title, imageLinks, price, description, updatedAt } = data;
  const { t } = useTranslation();

  const onHandleClick = () => 'click';

  return (
    <div css={styles.card}>
      <div css={styles.cardContent}>
        <div css={styles.leftContent}>
          <ItemImage src={imageLinks[0]} title={title} />
        </div>

        <div css={styles.rightContent}>
          <div css={styles.details}>
            <ItemHeader title={title} />
            <ItemDescription description={description} />
            <div css={styles.saleDetails}>
              <Price price={price} />
              <ItemStatus status={t('my-list:card.drafted')} />
            </div>
          </div>

          <div css={styles.postedFooter}>
            <div>
              <span css={styles.editDate}>{t('my-list:card.edit')}</span>
              <Date time={updatedAt} />
            </div>
            <div css={styles.publishButtonWrapper}>
              <Button size="small">{t('my-list:card.publish')}</Button>
            </div>
            <IconButton
              ariaLabel="edit"
              backgroundColor="lightgray"
              color={IconColor.GRAY}
              icon={IconName.XMARK}
              size="sm"
              onClick={onHandleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
