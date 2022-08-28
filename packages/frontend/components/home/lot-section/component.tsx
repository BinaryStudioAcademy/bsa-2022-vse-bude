import { Splide, SplideSlide } from '@splidejs/react-splide';
import { ProductCard } from 'components/product/card/component';
import { lightTheme } from 'theme';
import Router from 'next/router';
import { Routes } from '@enums';
import { SectionLayout } from '../section-layout';
import { lotContainer } from './styles';
import type { LotProps } from './types';

const LotSection = ({ title, lots, loadMoreTitle }: LotProps) => {
  const router = Router;
  const handleBidBuyProduct = (productId: string) => {
    router.push(`${Routes.ITEMS}/${productId}`);
  };

  return (
    <SectionLayout title={title} loadMoreTitle={loadMoreTitle}>
      <div css={lotContainer}>
        <Splide
          options={{
            fixedWidth: 320,
            pagination: false,
            arrows: false,
            gap: 10,
            focus: 'center',
            mediaQuery: 'min',
            breakpoints: {
              [lightTheme.breakpoints.md]: {
                fixedWidth: 360,
                gap: 25,
              },
            },
          }}
        >
          {lots.map((item) => (
            <SplideSlide key={item.id}>
              <ProductCard
                id={item.id}
                name={item.title}
                description={item.description}
                price={item.price}
                images={item.imageLinks}
                currency="EURO"
                auctionDate={item.endDate}
                onButtonClick={handleBidBuyProduct}
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                onChangeIsFavorite={() => {}}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </SectionLayout>
  );
};

export { LotSection };
