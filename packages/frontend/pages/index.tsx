import { Button, Container, Loading } from '@nextui-org/react';
import { Http } from '@vse-bude/shared';
import { Layout } from 'components';
import { CookieStorage } from 'helpers';
import { useAppDispatch, useTypedSelector } from 'hooks';
import Link from 'next/link';
import { shallowEqual } from 'react-redux';
import { fetchRandomData, fetchRandomDataSSR, wrapper } from 'store';

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const storage = new CookieStorage(ctx);
  const httpClient = new Http(process.env.NEXT_PUBLIC_API_ROUTE, storage);

  await store.dispatch(fetchRandomDataSSR(httpClient));

  return Promise.resolve({
    props: {},
  });
});

const IndexPage = () => {
  const { data, loading } = useTypedSelector((state) => state.randomData, shallowEqual);
  const dispatch = useAppDispatch();

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Container>
        <h1>
          Hello Next.js 👋 | Hello Next.js 👋 | Hello Next.js 👋 | Hello Next.js 👋 | Hello Next.js
          👋 |
        </h1>
      </Container>
      <Container>
        <div>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Button animated shadow size="md" onPress={() => dispatch(fetchRandomData())}>
            {loading ? <Loading /> : 'reload'}
          </Button>
        </div>
        <div>{JSON.stringify(data)}</div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
