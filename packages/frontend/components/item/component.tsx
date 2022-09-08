import React, { useEffect } from 'react';
import type { ItemDto } from '@vse-bude/shared';
import { ProductType } from '@vse-bude/shared';
import { Container } from '@primitives';
import {
  deleteProductFromFavorites,
  addProductToFavorites,
} from 'store/favorite-product';
import { useAppDispatch, useInFavorite, useTypedSelector } from '@hooks';
import { fetchCreateOrder } from 'store/checkout';
import { useRouter } from 'next/router';
import { Routes } from '@enums';
import { ItemInfoSelling } from './item-info-selling/component';
import { ItemInfoAuction } from './item-info-auction/component';
import { ItemImageSlider } from './image-slider/component';
import * as styles from './styles';

interface ItemProps {
  item: ItemDto;
}

export const Item = ({ item }: ItemProps) => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const order = useTypedSelector((state) => state.checkout.order);

  const handleBuy = () => {
    dispatch(fetchCreateOrder(item.id));
  };

  const isInFavorite = useInFavorite(item.id);

  const onChangeIsFavorite = () => {
    const favAction = isInFavorite
      ? deleteProductFromFavorites
      : addProductToFavorites;
    dispatch(favAction(item.id));
  };

  useEffect(() => {
    if (order?.id) {
      router.push(`${Routes.CHECKOUT}?id=${order?.id}`);
    }
  }, [order?.id, router]);

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
            onChangeIsFavorite={onChangeIsFavorite}
          />
        )}
      </Container>
    </React.Fragment>
  );
};
