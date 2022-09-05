import { Layout } from '@components/layout';
import { SavePost } from '@components/save-post';
import { wrapper } from 'store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Routes } from '@enums';
import { Http } from '@vse-bude/shared';
import { fetchProductSSR } from 'store/product';
import { withPublic } from '@hocs';
import { useTypedSelector } from '@hooks';
import { CookieStorage, LocaleHelper } from '@helpers';

export const getServerSideProps = withPublic(
  wrapper.getServerSideProps((store) => async (ctx) => {
    const { locale: language, query } = ctx;

    const cookieStorage = new CookieStorage(ctx);
    const locale = new LocaleHelper(cookieStorage, language);

    const http = new Http(process.env.NEXT_PUBLIC_API_ROUTE, locale);
    const id = query.id as string;

    const { payload } = await store.dispatch(fetchProductSSR({ id, http }));

    if (!payload) {
      return {
        redirect: {
          destination: Routes.NOT_FOUND,
        },
        props: {},
      };
    }

    return {
      props: {
        ...(await serverSideTranslations(language, [
          'common',
          'create-post',
          'rules',
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
