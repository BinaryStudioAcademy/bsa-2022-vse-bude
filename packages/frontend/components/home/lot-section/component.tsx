import { useTypedSelector } from '@hooks';
import { ProductCard } from 'components/product/card/component';
import { SectionLayout } from '../section-layout';
import { lotContainer } from './styles';

const LotSection = () => {
  const lots = useTypedSelector((state) => state.product.list);

  return (
    <SectionLayout title="Popular Lots">
      <div css={lotContainer}>
        {lots.map((item) => (
          <ProductCard
            name={item.title}
            description={item.description}
            price={item.price}
            key={item.id}
            images={item.imageLinks}
            currency="EURO"
            auctionDate={item.endDate}
            onChangeIsFavorite={() => {}}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export { LotSection };
