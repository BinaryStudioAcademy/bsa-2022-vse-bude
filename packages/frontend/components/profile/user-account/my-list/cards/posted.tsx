import { IconButton } from '@primitives';
import { IconColor, IconName } from '@enums';
import {
  ItemImage,
  ItemHeader,
  Price,
  ItemStatus,
  ItemDescription,
  Date,
  Views,
} from '../primitives';
import type { PostedItems } from './types';
import { randomSrc } from './utils';
import * as styles from './styles';

export const Posted = ({ data }: { data: PostedItems }) => {
  const { title, imageLinks, price, status, description, views, postDate } =
    data;

  const onHandleClick = () => {
    return 'click';
  };

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
            <Date time={postDate} />
            <Views views={views} />
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
