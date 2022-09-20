import { wrapper } from 'store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout } from '@components/layout';
import { SavePost } from '@components/save-post';
import type { UserResponseDto } from '@vse-bude/shared';
import { Http, ProductType } from '@vse-bude/shared';
import { Routes } from '@enums';
import { AuthHelper, CookieStorage } from '@helpers';
import { withPublic } from '@hocs';
import { getCurrentUserSSR } from 'store/auth';

export const getServerSideProps = withPublic(
  wrapper.getServerSideProps((store) => async (ctx) => {
    const { locale } = ctx;

    const cookieStorage = new CookieStorage(ctx);
    const auth = new AuthHelper(cookieStorage);
    const http = new Http(process.env.NEXT_PUBLIC_API_ROUTE, locale, auth);

    const { payload } = (await store.dispatch(getCurrentUserSSR(http))) as {
      payload: UserResponseDto;
    };

    if (!payload?.id) {
      return {
        redirect: {
          destination: Routes.NOT_FOUND,
        },
        props: {},
      };
    }

    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'common',
          'create-post',
          'rules',
          'item',
          'auth',
        ])),
      },
    };
  }),
);

const CreatePage = () => (
  <Layout title="Create product">
    <SavePost type={ProductType.SELLING} />
  </Layout>
);
export default CreatePage;
