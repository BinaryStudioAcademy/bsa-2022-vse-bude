import { Layout } from '@components/layout';
import { SavePost } from '@components/save-post';
import { wrapper } from 'store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Routes } from '@enums';
import { Http } from '@vse-bude/shared';
import { fetchEditProductSSR } from 'store/product';
import { withPublic } from '@hocs';
import { useTypedSelector } from '@hooks';
import { AuthHelper, CookieStorage } from '@helpers';

export const getServerSideProps = withPublic(
  wrapper.getServerSideProps((store) => async (ctx) => {
    const { locale, query } = ctx;
    const id = query.id as string;

    const cookieStorage = new CookieStorage(ctx);
    const auth = new AuthHelper(cookieStorage);
    const http = new Http(process.env.NEXT_PUBLIC_API_ROUTE, locale, auth);

    const { payload: productPayload } = await store.dispatch(
      fetchEditProductSSR({ id, http }),
    );

    if (!productPayload) {
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
        ])),
      },
    };
  }),
);

const EditPage = () => {
  const currentProduct = useTypedSelector((state) => state.product.currentItem);

  return (
    <Layout title="Edit post">
      <SavePost type={currentProduct.type} edit />
    </Layout>
  );
};
export default EditPage;
