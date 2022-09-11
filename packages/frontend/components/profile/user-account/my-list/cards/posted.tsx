import { IconButton } from '@primitives';
import { IconColor, IconName } from '@enums';
import { useTranslation } from 'next-i18next';
import {
  ItemImage,
  ItemHeader,
  Price,
  ItemStatus,
  ItemDescription,
  ItemDate,
  Views,
} from '../primitives';
import type { ItemCard } from './types';
import * as styles from './styles';

export const Posted = ({ data }: { data: ItemCard }) => {
  const { t } = useTranslation();
  const { title, imageLinks, price, description, views, postDate } = data;

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
              <ItemStatus status={t('my-list:card.posted')} />
            </div>
          </div>

          <div css={styles.postedFooter}>
            <ItemDate time={postDate} />
            <Views views={views} />
            <IconButton
              ariaLabel="edit"
              backgroundColor="lightgray"
              color={IconColor.GRAY}
              icon={IconName.PENCIL}
              size="sm"
              cssExtend={styles.iconButton}
              onClick={onHandleClick}
            />

            <IconButton
              ariaLabel="cancel"
              backgroundColor="darkgray"
              color={IconColor.ORANGE}
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
