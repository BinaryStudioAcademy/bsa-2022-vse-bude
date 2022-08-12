import { useState } from 'react';
import { Button } from '@primitives';
import { textLimit } from '@helpers';
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
  const [isFavorite, setIsFavorite] = useState(false);

  const onChangeIsFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="cardBlock" css={productCard}>
      <div css={productHeader}>
        <div className="imageSlider">
          <ImageSlider images={props.images} />
        </div>
        <FavoriteButton
          onUpdateFavorite={onChangeIsFavorite}
          isFavorite={isFavorite}
        />
        <div css={productTimer}>
          <ProductTimer date={props.auctionDate} />
        </div>
      </div>
      <div>
        <div css={productName}>{props.name}</div>
        <div css={productDescription}>{textLimit(props.description)}</div>
        <hr css={divider} />
      </div>
      <div css={productFooter}>
        <div className="productPrice">
          <Price amount={props.price} currency={props.currency} />
        </div>
        <div className="productAction">
          <Button title="Place a Bid" variant="filled" size="small">
            Place a Bid
          </Button>
        </div>
      </div>
    </div>
  );
};
