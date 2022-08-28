import { Button, StringCutter } from '@primitives';
import { useTranslation } from 'next-i18next';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { Price } from '../price';
import { FavoriteButton } from '../favorite-button/component';
import { ProductTimer } from '../timer/component';
import { ImageSlider } from '../image-slider/component';
import {
  addProductToFavorites,
  deleteProductFromFavorites,
} from '../../../store/product';
import { useInFavorite } from '../../../hooks/favorite-product';
import {
  productFooter,
  productCard,
  productHeader,
  productTimer,
  productName,
  productDescription,
  divider,
} from './styles';
import type { ProductCardProps } from './types';

export const ProductCard = (props: ProductCardProps) => {
  const { user } = useTypedSelector((state) => state.auth);

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const isInFavorite = useInFavorite(props.data.id);

  const onChangeIsFavorite = () => {
    const favAction = isInFavorite
      ? deleteProductFromFavorites
      : addProductToFavorites;
    dispatch(favAction(props.data.id));
  };

  return (
    <div className="cardBlock" css={productCard}>
      <div css={productHeader}>
        <div className="imageSlider">
          <ImageSlider images={props.images} />
        </div>
        {!!user && (
          <FavoriteButton
            onChangeIsFavorite={onChangeIsFavorite}
            isFavorite={isInFavorite}
          />
        )}
        <div css={productTimer}>
          <ProductTimer date={props.auctionDate} />
        </div>
      </div>
      <div>
        <div css={productName}>{props.name}</div>
        <div css={productDescription}>
          <StringCutter lines={2}>{props.description}</StringCutter>
        </div>
        <hr css={divider} />
      </div>
      <div css={productFooter}>
        <div className="productPrice">
          <Price amount={props.price} currency={props.currency} />
        </div>
        <div className="productAction">
          <Button
            title="Place a Bid"
            variant="filled"
            size="small"
            onClick={() => props.onButtonClick(props.id)}
          >
            {t('common:components.product.placeBidBtn')}
          </Button>
        </div>
      </div>
    </div>
  );
};
