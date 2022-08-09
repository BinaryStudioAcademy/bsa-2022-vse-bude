import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Button, Container, Loading, Card } from '@primitives';
import { Http } from '@vse-bude/shared';
import { Layout } from '@components';
import { CookieStorage } from '@helpers';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { shallowEqual } from 'react-redux';
import { fetchRandomData, fetchRandomDataSSR, wrapper } from 'store';
import { log } from 'util';

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
  const { data, loading } = useTypedSelector(
    (state) => state.randomData,
    shallowEqual,
  );
  const dispatch = useAppDispatch();
  const { t } = useTranslation('home');

  return (
    <Layout>
      <Container>
        <h1>{t('h1')}</h1>
        <Card>
          <Card.Body>
            <div style={{ wordBreak: 'break-all' }}>{JSON.stringify(data)}</div>
          </Card.Body>
          <Card.Footer>

            <Button
              animated
              shadow
              size="md"
              onPress={() => dispatch(fetchRandomData())}
            >
              {loading ? <Loading /> : 'reload'}
            </Button>
          </Card.Footer>
        </Card>
      </Container>
    </Layout>
  );
};

export default IndexPage;
