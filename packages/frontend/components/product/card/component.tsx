import { InternalLink, StringCutter } from '@primitives';
import { useTranslation } from 'next-i18next';
import { useAppDispatch, useTypedSelector, useInFavorite } from '@hooks';
import {
  addProductToFavorites,
  deleteProductFromFavorites,
} from 'store/favorite-product';
import { shallowEqual } from 'react-redux';
import { Routes } from '@enums';
import { ProductType } from '@vse-bude/shared';
import { Price } from '../price';
import { FavoriteButton } from '../favorite-button/component';
import { ProductTimer } from '../timer/component';
import { ImageSlider } from '../image-slider/component';
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
  const { user } = useTypedSelector((state) => state.auth, shallowEqual);

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const isInFavorite = useInFavorite(props.data.id);

  const onChangeIsFavorite = () => {
    const favAction = isInFavorite
      ? deleteProductFromFavorites
      : addProductToFavorites;
    dispatch(favAction(props.data.id));
  };

  const renderButton = () => {
    if (props.type === ProductType.AUCTION) {
      return (
        <InternalLink
          title={t('common:components.product.placeBidBtn')}
          href={`${Routes.ITEMS}/${props.data.id}`}
          variant="button"
        >
          {t('common:components.product.placeBidBtn')}
        </InternalLink>
      );
    }

    return (
      <InternalLink
        title={t('common:components.product.buyBtn')}
        href={`${Routes.ITEMS}/${props.data.id}`}
        variant="button"
      >
        {t('common:components.product.buyBtn')}
      </InternalLink>
    );
  };

  return (
    <div className="cardBlock" css={productCard}>
      <div css={productHeader}>
        <div className="imageSlider">
          <ImageSlider
            priority={props.loadImageHighPriority}
            images={props.images}
          />
        </div>
        {!!user && (
          <FavoriteButton
            onChangeIsFavorite={onChangeIsFavorite}
            isFavorite={isInFavorite}
          />
        )}
        {props.type === ProductType.AUCTION && (
          <div css={productTimer}>
            <ProductTimer date={props.auctionDate} />
          </div>
        )}
      </div>
      <div>
        <div css={productName}>
          <StringCutter>{props.name}</StringCutter>
        </div>
        <div css={productDescription}>
          <StringCutter lines={2}>{props.description}</StringCutter>
        </div>
        <hr css={divider} />
      </div>
      <div css={productFooter}>
        <div className="productPrice">
          <Price amount={props.price} />
        </div>
        <div className="productAction">{renderButton()}</div>
      </div>
    </div>
  );
};
