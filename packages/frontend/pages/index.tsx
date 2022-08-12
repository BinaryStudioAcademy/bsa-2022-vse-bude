import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Button, Container } from '@primitives';
import { Http } from '@vse-bude/shared';
import { Layout } from '@components';
import { CookieStorage } from '@helpers';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { shallowEqual } from 'react-redux';
import { fetchRandomData, fetchRandomDataSSR, wrapper } from 'store';
import { css } from '@emotion/react';
import { ProductCard } from '../components/product/card/component';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const storage = new CookieStorage(ctx);
    const { locale } = ctx;
    const httpClient = new Http(process.env.NEXT_PUBLIC_API_ROUTE, storage);

    await store.dispatch(fetchRandomDataSSR(httpClient));

    return Promise.resolve({
      props: {
        ...(await serverSideTranslations(locale, ['home'])),
      },
    });
  },
);

const IndexPage = () => {
  const { data } = useTypedSelector((state) => state.randomData, shallowEqual);
  const dispatch = useAppDispatch();
  const { t } = useTranslation('home');

  const productData = {
    images: [
      'https://gingkodesign.com/wp-content/uploads/2020/12/Black-Smart-Moon-Lamp-scaled.jpg',
      'https://gingkodesign.com/wp-content/uploads/2020/06/Gingko-Mini-Halo-One-Bluetooth-Speaker40-1.jpg',
    ],
    price: 200,
    name: 'Some name',
    description: 'Some description',
    auctionDate: new Date('2022-08-14 00:00:00'),
    currency: 'UAH',
  };

  return (
    <Layout>
      <Container>
        <h1>{t('h1')}</h1>
        <div>
          <div style={{ wordBreak: 'break-all' }}>{JSON.stringify(data)}</div>
          <Button
            variant="outlined"
            onClick={() => dispatch(fetchRandomData())}
          >
            click me
          </Button>
          <Button
            variant="outlined"
            disabled
            onClick={() => dispatch(fetchRandomData())}
          >
            click me
          </Button>

          <Button variant="filled" onClick={() => dispatch(fetchRandomData())}>
            click me
          </Button>
          <Button
            disabled
            variant="filled"
            onClick={() => dispatch(fetchRandomData())}
          >
            click me
          </Button>
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
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
