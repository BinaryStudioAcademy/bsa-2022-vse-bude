import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useTypedSelector } from '@hooks';
import { ProductCard } from 'components/product/card/component';
import { lightTheme } from 'theme';
import { SectionLayout } from '../section-layout';

const LotSection = () => {
  const lots = useTypedSelector((state) => state.product.list);

  return (
    <SectionLayout title="Popular Lots">
      <div>
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
                name={item.title}
                description={item.description}
                price={item.price}
                images={item.imageLinks}
                currency="EURO"
                auctionDate={item.endDate}
                onChangeIsFavorite={() => {
                  console.log('dsf');
                }}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </SectionLayout>
  );
};

export { LotSection };
