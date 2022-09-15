import type { ProductDto } from '@vse-bude/shared';
import { Button, Tooltip } from '@primitives';
import { FavoriteButton } from 'components/product/favorite-button/component';
import { useTranslation } from 'next-i18next';
import { useTypedSelector } from '@hooks';
import { useRouter } from 'next/router';
import { ItemTitle, ItemInfo, ItemPrice } from '../item-info';
import * as styles from './styles';
import { IconColor } from '@enums';

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
            <Button onClick={onBuy}>{t('item:buttons.buyBtn')}</Button>
            <Tooltip
              trigger={
                <FavoriteButton
                  cssExtended={styles.favouriteButton}
                  onChangeIsFavorite={onChangeIsFavorite}
                  isFavorite={isInFavorite}
                  backgroundColor="transparent"
                  inFavouriteColor={IconColor.YELLOW}
                  notInFavouriteColor={IconColor.YELLOW}
                  size="md"
                  disabled={!user}
                />
              }
            >
              {user
                ? isInFavorite
                  ? t('item:buttons.tooltips.favBtnRemove')
                  : t('item:buttons.tooltips.favBtn')
                : t('item:buttons.tooltips.notAuthorized.favBtn')}
            </Tooltip>
          </>
        )}
      </div>
    </div>
  );
};
