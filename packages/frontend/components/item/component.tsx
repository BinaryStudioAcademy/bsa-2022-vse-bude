import React from 'react';
import type { ItemDto } from '@vse-bude/shared';
import { ProductType } from '@vse-bude/shared';
import { Container } from '@primitives';
import { lightTheme } from 'theme';
import { useWindowSize } from '@hooks';
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

  // delete after adding different photos to post
  const images = [
    'https://picsum.photos/id/1/640/480/',
    'https://picsum.photos/id/2/640/480/',
    'https://picsum.photos/id/3/640/480/',
    'https://picsum.photos/id/4/640/480/',
  ];

  const handleAddFavourite = () => console.log('favourite');
  const handleBuy = () => console.log('buy');
  const handleBid = () => console.log('bid');

  // mockedUp date
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 1);

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
            onBuy={handleBuy}
            onChangeIsFavorite={handleAddFavourite}
          />
        ) : (
          <ItemInfoAuction
            item={item}
            onBid={handleBid}
            onChangeIsFavorite={handleAddFavourite}
          />
        )}
      </Container>
    </React.Fragment>
  );
};
