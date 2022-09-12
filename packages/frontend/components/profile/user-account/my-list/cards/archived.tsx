import { useTranslation } from 'next-i18next';
import { IconButton, Button } from '@primitives';
import { IconColor, IconName } from '@enums';
import {
  ItemImage,
  ItemHeader,
  Price,
  ItemStatus,
  ItemDescription,
  ItemDate,
} from '../primitives';
import type { ItemCard } from './types';
import * as styles from './styles';

export const Archived = ({ data }: { data: ItemCard }) => {
  const { t } = useTranslation();
  const { title, imageLinks, price, description, endDate } = data;

  const onHandleClick = () => 'click';

  return (
    <div css={styles.card}>
      <div css={styles.cardContent}>
        <div css={styles.leftContent}>
          <ItemImage src={imageLinks[0]} title={title} />
          <ItemDate time={endDate} />
        </div>

        <div css={styles.rightContent}>
          <div css={styles.details}>
            <ItemHeader title={title} />
            <ItemDescription description={description} />
            <div css={styles.saleDetails}>
              <Price price={price} />
              <ItemStatus status={'Archived'} />
            </div>
          </div>

          <div css={styles.postedFooter}>
            <div css={styles.publishButtonWrapper}>
              <Button size="small">{t('my-list:card.unarchive')}</Button>
            </div>
            <IconButton
              ariaLabel="edit"
              backgroundColor="lightgray"
              color={IconColor.GRAY}
              icon={IconName.PENCIL}
              size="sm"
              onClick={onHandleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
