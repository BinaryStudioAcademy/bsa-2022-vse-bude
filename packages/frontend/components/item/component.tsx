import React from 'react';
import type { ProductDto } from '@vse-bude/shared';
import { ProductType } from '@vse-bude/shared';
import { Container } from '@primitives';
import {
  deleteProductFromFavorites,
  addProductToFavorites,
} from 'store/favorite-product';
import { useAppDispatch, useInFavorite } from '@hooks';
import { createOrderAction } from 'store/checkout';
import { ItemImageSlider } from './image-slider/component';
import { ItemInfoSelling } from './item-info-selling/component';
import { ItemInfoAuction } from './item-info-auction/component';
import * as styles from './styles';

interface ItemProps {
  item: ProductDto;
}

export const Item = ({ item }: ItemProps) => {
  const dispatch = useAppDispatch();

  const handleBuy = () => {
    dispatch(createOrderAction(item.id));
  };

  const isInFavorite = useInFavorite(item.id);

  const onChangeIsFavorite = () => {
    const favAction = isInFavorite
      ? deleteProductFromFavorites
      : addProductToFavorites;
    dispatch(favAction(item.id));
  };

  return (
    <React.Fragment>
      <Container cssExtend={styles.itemWrapper}>
        <ItemImageSlider imageLinks={item.imageLinks} />
        {item.type === ProductType.SELLING ? (
          <ItemInfoSelling
            item={item}
            isInFavorite={isInFavorite}
            onBuy={handleBuy}
            onChangeIsFavorite={onChangeIsFavorite}
          />
        ) : (
          <ItemInfoAuction
            item={item}
            isInFavorite={isInFavorite}
            onBuy={handleBuy}
            onChangeIsFavorite={onChangeIsFavorite}
          />
        )}
      </Container>
    </React.Fragment>
  );
};
