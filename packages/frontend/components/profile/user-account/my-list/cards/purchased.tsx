import { useState, useEffect } from 'react';
import {
  ItemImage,
  ItemHeader,
  Price,
  ItemStatus,
  ProfileLink,
  Date,
} from '../primitives';
import { Charity } from '../tmp-element-charity';
import type { PurchasedItems } from './types';
import { randomSrc } from './utils';
import * as styles from './styles';

export const Purchased = ({ data }: { data: PurchasedItems }) => {
  const [isAuthor, setIsAuthor] = useState(false);
  const { title, imageLinks, price, status, author, endDate } = data;
  const { id, avatar, firstName, lastName } = author;

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
          <Date size="lg" time={endDate} />
        </div>

        <div css={styles.rightContent}>
          <div css={styles.details}>
            <ItemHeader title={title} />
            <div css={styles.saleDetails}>
              <Price price={price} />
              <ItemStatus isAuthor={isAuthor} status={status} />
            </div>
            <ProfileLink
              isAuthor={isAuthor}
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
