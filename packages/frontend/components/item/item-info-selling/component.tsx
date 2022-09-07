﻿import type { ItemDto } from '@vse-bude/shared';
import { Button } from '@primitives';
import { FavoriteButton } from 'components/product/favorite-button/component';
import { useTranslation } from 'next-i18next';
import { useTypedSelector } from '@hooks';
import Link from 'next/link';
import { ItemTitle, ItemInfo, ItemPrice } from '../item-info';
import * as styles from './styles';

interface ItemInfoSellingProps {
  item: ItemDto;
  isInFavorite: boolean;
  onBuy: () => void;
  onChangeIsFavorite: () => void;
}

export const ItemInfoSelling = ({
  item,
  isInFavorite,
  onBuy,
  onChangeIsFavorite,
}: ItemInfoSellingProps) => {
  const { t } = useTranslation('item');
  const { user } = useTypedSelector((state) => state.auth);
  const isAuthor = user?.id === item.author.id;

  return (
    <div css={styles.wrapper}>
      <ItemTitle title={item.title} views={item.views} />
      <ItemPrice
        amount={item.price}
        currency="UAH"
        cssExtended={styles.price}
      />
      <ItemInfo item={item} />
      <div css={styles.controls}>
        {isAuthor ? (
          <Link href={`/items/edit/${item.id}`}>
            <a style={{ textDecoration: 'none' }}>
              <Button>Edit</Button>
            </a>
          </Link>
        ) : (
          <>
            <FavoriteButton
              cssExtended={styles.favouriteButton}
              onChangeIsFavorite={onChangeIsFavorite}
              isFavorite={isInFavorite}
              backgroundColor="transparent"
              size="md"
              disabled={!user}
            />
            <Button onClick={onBuy}>{t('buttons.buyBtn')}</Button>
          </>
        )}
      </div>
    </div>
  );
};
