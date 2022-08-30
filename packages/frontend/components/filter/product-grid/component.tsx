import { Routes } from '@enums';
import { SplideSlide } from '@splidejs/react-splide';
import { ProductCard } from 'components/product/card/component';
import Router from 'next/router';
import * as styles from './styles';
import type { ProductGridProps } from './types';

export const ProductGrid = ({ lots }: ProductGridProps) => {
  const router = Router;
  const handleBidBuyProduct = (productId: string) => {
    router.push(`${Routes.ITEMS}/${productId}`);
  };

  return (
    <div css={styles.productGridWrapper}>
      <div css={styles.productGrid}>
        {lots.map((item) => (
          <SplideSlide key={item.id}>
            <ProductCard
              data={item}
              name={item.title}
              description={item.description}
              price={item.price}
              images={item.imageLinks}
              currency="UAH"
              auctionDate={item.endDate}
              onButtonClick={handleBidBuyProduct}
            />
          </SplideSlide>
        ))}
      </div>
    </div>
  );
};
