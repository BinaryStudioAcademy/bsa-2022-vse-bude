import React from 'react';
import type { ItemDto } from '@vse-bude/shared';
import { ProductType } from '@vse-bude/shared';
import { Container } from '@primitives';
import { ItemImageSlider } from './image-slider/component';
import { ItemInfoSelling } from './item-info-selling/component';
import { ItemInfoAuction } from './item-info-auction/component';

import * as styles from './styles';

interface ItemProps {
  item: ItemDto;
}

export const Item = ({ item }: ItemProps) => {
  // delete after adding different photos to post
  const image = [
    'https://picsum.photos/id/1/640/480/',
    'https://picsum.photos/id/2/640/480/',
    'https://picsum.photos/id/3/640/480/',
    'https://picsum.photos/id/4/640/480/',
  ];

  const handleAddFavourite = () => console.log('favourite');
  const handleBuy = () => console.log('buy');
  const handleBid = () => console.log('bid');

  return (
    <React.Fragment>
      <Container cssExtend={styles.itemWrapper}>
        <ItemImageSlider imageLinks={image} />
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
