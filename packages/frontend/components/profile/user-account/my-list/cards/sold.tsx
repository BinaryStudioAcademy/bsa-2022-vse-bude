import { useState, useEffect } from 'react';
import type { ProductDto } from '@vse-bude/shared';
import {
  ItemImage,
  ItemHeader,
  Price,
  ItemStatus,
  ProfileLink,
  ItemDate,
} from '../primitives';
import { Charity } from '../tmp-element-charity';
import { randomSrc } from './utils';
import * as styles from './styles';

export const Sold = ({ data }: { data: ProductDto }) => {
  const [isAuthor, setIsAuthor] = useState(false);
  const { title, imageLinks, price, status, winner, endDate } = data;
  const { id, avatar, firstName, lastName } = winner;

  useEffect(() => {
    if (Object.hasOwn(data, 'author')) {
      setIsAuthor(true);
    }
  }, [data, isAuthor]);

  return (
    <div css={styles.card}>
      <div css={styles.cardContent}>
        <div css={styles.leftContent}>
          <ItemImage src={randomSrc({ array: imageLinks })} title={title} />
          <ItemDate size="lg" time={endDate} />
        </div>

        <div css={styles.rightContent}>
          <div css={styles.details}>
            <ItemHeader title={title} />
            <div css={styles.saleDetails}>
              <Price price={price} />
              <ItemStatus isAuthor={!isAuthor} status={status} />
            </div>
            <ProfileLink
              isAuthor={false}
              id={id}
              avatar={avatar}
              firstName={firstName}
              lastName={lastName}
            />
          </div>
          <Charity />
        </div>
      </div>
    </div>
  );
};
