import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withProtected } from '@hocs';
import { AuthHelper, CookieStorage } from '@helpers';
import { Http } from '@vse-bude/shared';
import { fetchFavouritesSSR, wrapper } from 'store';
import { Layout } from '@components/layout';
import { FavouritesItems } from '@components/profile/user-account';

export const getServerSideProps = withProtected(
  wrapper.getServerSideProps((store) => async (ctx) => {
    const { locale } = ctx;
    const cookieStorage = new CookieStorage(ctx);
    const auth = new AuthHelper(cookieStorage);

    const httpClient = new Http(
      process.env.NEXT_PUBLIC_API_ROUTE,
      locale,
      auth,
    );

    await store.dispatch(fetchFavouritesSSR({ http: httpClient }));

    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'common',
          'account',
          'personal-info',
          'my-list',
        ])),
      },
    };
  }),
);

const FavouritesPage = () => (
  <Layout>
    <FavouritesItems />
  </Layout>
);

export default FavouritesPage;
