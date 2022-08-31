﻿import React from 'react';
import type { CreateBidRequest, ItemDto } from '@vse-bude/shared';
import { ProductType } from '@vse-bude/shared';
import { Container } from '@primitives';
import { lightTheme } from 'theme';
import {
  deleteProductFromFavorites,
  addProductToFavorites,
} from 'store/favorite-product';
import { useAppDispatch, useWindowSize, useInFavorite } from '@hooks';
import { makeBid } from '../../store/product';
import { ItemImageSlider } from './image-slider/component';
import { ItemInfoSelling } from './item-info-selling/component';
import { ItemInfoAuction } from './item-info-auction/component';
import { ImageSliderSplide } from './image-slider-splide/component';
import * as styles from './styles';

interface ItemProps {
  item: ItemDto;
}

export const Item = ({ item }: ItemProps) => {
  const windowSize = useWindowSize();

  const dispatch = useAppDispatch();

  // TODO: delete after adding different photos to post
  const images = [
    'https://picsum.photos/id/1/640/480/',
    'https://picsum.photos/id/2/640/480/',
    'https://picsum.photos/id/3/640/480/',
    'https://picsum.photos/id/4/640/480/',
  ];

  const handleBuy = () => console.log('buy');
  const handleBid = ({ price }: CreateBidRequest) => {
    dispatch(
      makeBid({
        price: price,
        productId: item.id,
      }),
    );
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
        {windowSize.width > lightTheme.breakpoints.sm ? (
          <ItemImageSlider imageLinks={images} />
        ) : (
          <ImageSliderSplide imageLinks={images} />
        )}
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
            onBid={handleBid}
            onChangeIsFavorite={onChangeIsFavorite}
          />
        )}
      </Container>
    </React.Fragment>
  );
};
