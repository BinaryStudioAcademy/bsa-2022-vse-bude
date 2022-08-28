import { Splide, SplideSlide } from '@splidejs/react-splide';
import { ProductCard } from 'components/product/card/component';
import { lightTheme } from 'theme';
import { SectionLayout } from '../section-layout';
import { lotContainer } from './styles';
import type { LotProps } from './types';

const LotSection = ({ title, lots, loadMoreTitle }: LotProps) => (
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
              data={item}
              name={item.title}
              description={item.description}
              price={item.price}
              images={item.imageLinks}
              currency="UAH"
              auctionDate={item.endDate}
              isFavorite={false}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  </SectionLayout>
);

export { LotSection };
