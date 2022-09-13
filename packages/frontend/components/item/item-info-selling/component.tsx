﻿import type { ProductDto } from '@vse-bude/shared';
import { Button, Loader } from '@primitives';
import { FavoriteButton } from 'components/product/favorite-button/component';
import { useTranslation } from 'next-i18next';
import { useTypedSelector } from '@hooks';
import { useRouter } from 'next/router';
import { ItemTitle, ItemInfo, ItemPrice } from '../item-info';
import * as styles from './styles';

interface ItemInfoSellingProps {
  item: ProductDto;
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
  const { t } = useTranslation();
  const { push } = useRouter();
  const { user } = useTypedSelector((state) => state.auth);
  const { loading } = useTypedSelector((state) => state.product);
  const isAuthor = user?.id === item.author.id;

  return (
    <div css={styles.wrapper}>
      <ItemTitle title={item.title} views={item.views} />
      <ItemPrice
        amount={item.price}
        currency={t('public:uah')}
        cssExtended={styles.price}
      />
      <ItemInfo item={item} />
      <div css={styles.controls}>
        {isAuthor ? (
          <Button onClick={() => push(`/items/edit/${item.id}`)}>Edit</Button>
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
            <Button
              onClick={onBuy}
              disabled={!user || !user.phoneVerified || loading}
              tooltip={
                user
                  ? user.phoneVerified
                    ? t('item:buttons.placeBid')
                    : t('item:buttons.tooltips.notVerified.buyBtn')
                  : t('item:buttons.tooltips.notAuthorized.buyBtn')
              }
            >
              {loading ? (
                <Loader size="extraSmall" />
              ) : (
                t('item:buttons.buyBtn')
              )}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
