import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Button, Container } from '@primitives';
import { Layout } from '@components';
import { wrapper } from 'store';
import { css } from '@emotion/react';
import { useState } from 'react';
import { ProductCard } from '../components/product/card/component';
import Test from './test';

export const getServerSideProps = wrapper.getServerSideProps(
  (_store) => async (ctx) => {
    const { locale } = ctx;

    // const storage = new CookieStorage(ctx);
    // const auth = new AuthHelper(storage);
    // const httpClient = new Http(process.env.NEXT_PUBLIC_API_ROUTE, auth);

    // await store.dispatch(fetchRandomDataSSR(httpClient));

    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'home',
          'product',
          'common',
        ])),
      },
    };
  },
);

const IndexPage = () => {
  const { t } = useTranslation('home');

  const [isFavorite, setIsFavorite] = useState(false);

  const onChangeIsFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const productData = {
    images: [
      'https://gingkodesign.com/wp-content/uploads/2020/12/Black-Smart-Moon-Lamp-scaled.jpg',
      'https://gingkodesign.com/wp-content/uploads/2020/06/Gingko-Mini-Halo-One-Bluetooth-Speaker40-1.jpg',
    ],
    price: 200,
    name: 'Some name',
    description: 'Some description asdasd as dasd as das da das das adssa',
    auctionDate: new Date('2022-08-17 00:00:00'),
    currency: 'UAH',
  };

  return (
    <Layout>
      <Container>
        <h1>{t('h1')}</h1>
        <div>
          <Button variant="outlined">click me</Button>

          <Button variant="outlined" disabled>
            click me
          </Button>
          <Button variant="filled">click me</Button>
          <Button disabled variant="filled">
            click me
          </Button>

          <Test />
          <div
            css={css`
              width: 300px;
              margin-top: 15px;
            `}
          >
            <ProductCard
              images={productData.images}
              auctionDate={productData.auctionDate}
              name={productData.name}
              description={productData.description}
              price={productData.price}
              currency={productData.currency}
              onChangeIsFavorite={onChangeIsFavorite}
              isFavorite={isFavorite}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
