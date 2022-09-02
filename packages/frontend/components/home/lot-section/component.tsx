import { Splide, SplideSlide } from '@splidejs/react-splide';
import { ProductCard } from 'components/product/card/component';
import '@splidejs/react-splide/css';
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
          aria-label="items-carousel"
          options={{
            role: 'region',
            fixedWidth: 360,
            focus: 0,
            pagination: false,
            trimSpace: true,
            updateOnMove: true,
            wheel: true,
            releaseWheel: true,
            direction: 'ltr',
            mediaQuery: 'max',
            breakpoints: {
              [lightTheme.breakpoints.sm]: {
                fixedWidth: 300,
              },
              [lightTheme.breakpoints.md]: {
                arrows: false,
              },
              [lightTheme.breakpoints.xl]: {
                fixedWidth: 340,
              },
            },
          }}
        >
          {lots.map((item) => (
            <SplideSlide key={item.id + item.title}>
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
        </Splide>
      </div>
    </SectionLayout>
  );
};

export { LotSection };
