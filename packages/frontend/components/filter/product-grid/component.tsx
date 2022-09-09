import { SplideSlide } from '@splidejs/react-splide';
import { ProductCard } from 'components/product/card/component';
import { useTranslation } from 'next-i18next';
import * as styles from './styles';
import type { ProductGridProps } from './types';

export const ProductGrid = ({ lots }: ProductGridProps) => {
  const { t } = useTranslation();

  return (
    <>
      {lots?.length === 0 && (
        <h3 css={styles.headline}>{t('items-page:headline.notFound')}</h3>
      )}
      <div css={styles.productGridWrapper}>
        <div css={styles.productGrid}>
          {lots?.length > 0 &&
            lots.map((item) => (
              <SplideSlide key={item.id}>
                <ProductCard
                  data={item}
                  name={item.title}
                  description={item.description}
                  price={item.price}
                  images={item.imageLinks}
                  type={item.type}
                  currency="UAH"
                  auctionDate={item.endDate}
                />
              </SplideSlide>
            ))}
        </div>
      </div>
    </>
  );
};
