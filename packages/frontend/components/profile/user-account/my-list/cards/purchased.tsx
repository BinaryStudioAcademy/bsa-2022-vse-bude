import { useTranslation } from 'next-i18next';
import {
  ItemImage,
  ItemHeader,
  Price,
  ItemStatus,
  ProfileLink,
  ItemDate,
} from '../primitives';
import { Charity } from '../tmp-element-charity';
import type { ItemCard } from './types';
import * as styles from './styles';

export const Purchased = ({ data }: { data: ItemCard }) => {
  const { t } = useTranslation();
  const { title, imageLinks, price, author, endDate } = data;
  const { id, avatar, firstName, lastName } = author;

  return (
    <div css={styles.card}>
      <div css={styles.cardContent}>
        <div css={styles.leftContent}>
          <ItemImage src={imageLinks[0]} title={title} />
          <ItemDate size="lg" time={endDate} />
        </div>

        <div css={styles.rightContent}>
          <div css={styles.details}>
            <ItemHeader title={title} />
            <div css={styles.saleDetails}>
              <Price price={price} />
              <ItemStatus status={t('my-list:card.purchased')} />
            </div>
            <ProfileLink
              userStatus={t('my-list:card.seller')}
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
