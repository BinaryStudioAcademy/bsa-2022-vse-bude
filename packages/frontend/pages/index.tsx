import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Button, Container } from '@primitives';
import { Http } from '@vse-bude/shared';
import { Layout } from '@components';
import { auth } from '@helpers';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { shallowEqual } from 'react-redux';
import { fetchRandomData, fetchRandomDataSSR, wrapper } from 'store';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { locale } = ctx;
    const httpClient = new Http(process.env.NEXT_PUBLIC_API_ROUTE, auth);

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
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
