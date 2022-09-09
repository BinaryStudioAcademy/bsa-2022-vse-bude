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
import type { CancelledItems } from './types';
import { randomSrc } from './utils';
import * as styles from './styles';

export const Cancelled = ({ data }: { data: CancelledItems }) => {
  const { title, imageLinks, price, status, description, postDate } = data;
  const { t } = useTranslation();

  const onHandleClick = () => 'click';

  return (
    <div css={styles.card}>
      <div css={styles.cardContent}>
        <div css={styles.leftContent}>
          <ItemImage src={randomSrc({ array: imageLinks })} title={title} />
        </div>

        <div css={styles.rightContent}>
          <div css={styles.details}>
            <ItemHeader title={title} />
            <ItemDescription description={description} />
            <div css={styles.saleDetails}>
              <Price price={price} />
              <ItemStatus status={status} />
            </div>
          </div>

          <div css={styles.postedFooter}>
            <div>
              <span css={styles.editDate}>{t('my-list:card.edit')}</span>
              <ItemDate time={postDate} />
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
