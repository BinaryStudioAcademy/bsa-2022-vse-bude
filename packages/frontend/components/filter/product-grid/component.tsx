import { useTypedSelector } from '@hooks';
import { ProductCard } from 'components/product/card/component';
import { useTranslation } from 'next-i18next';
import * as styles from './styles';

export const ProductGrid = () => {
  const { t } = useTranslation();
  const { list } = useTypedSelector((store) => store.product);

  return (
    <>
      {list?.length === 0 && (
        <h3 css={styles.headline}>{t('items-page:headline.notFound')}</h3>
      )}
      <div css={styles.productGridWrapper}>
        <div css={styles.productGrid}>
          {list?.length > 0 &&
            list.map((item) => (
              <div key={item.id}>
                <ProductCard
                  data={item}
                  name={item.title}
                  description={item.description}
                  price={item.price}
                  images={item.imageLinks}
                  type={item.type}
                  auctionDate={item.endDate}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
