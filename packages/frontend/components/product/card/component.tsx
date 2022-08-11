import { css } from '@emotion/react';
import { Button } from '@primitives';
import { textLimit } from '@helpers';
import { Price } from '../../price';
import { FavoriteButton } from '../favorite-button/component';
import { ProductTimer } from '../timer/component';
import {
  productFooter,
  productCard,
  productHeader,
  productTimer,
  productName,
  productDescription,
  divider,
} from './styles';
import image from './image.jpg';

export const ProductCard = () => (
  <div className="cardBlock" css={productCard}>
    <div css={productHeader}>
      <div className="imageSlider">
        <img
          css={css`
            width: 100%;
            height: 300px;
            border: 1px solid lightgray;
          `}
          src={image.src}
          alt=""
        />
      </div>
      <FavoriteButton />
      <div css={productTimer}>
        <ProductTimer date={new Date('2022-08-30')} />
      </div>
    </div>
    <div>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <div css={productName}>Gray puff "Jusk"</div>
      <div css={productDescription}>
        {textLimit(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi senectus semper elit risus.',
        )}
      </div>
      <hr css={divider} />
    </div>
    <div css={productFooter}>
      <div className="productPrice">
        <Price amount={250} currency="UAH" />
      </div>
      <div className="productAction">
        <Button title="Place a Bid" variant="filled" size="small">
          Place a Bid
        </Button>
      </div>
    </div>
    <div className="cardImage"></div>
  </div>
);
