import { Layout } from '@components/layout';
import { SavePost } from '@components/save-post';
import { wrapper } from 'store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { Routes } from '@enums';
import { Http } from '@vse-bude/shared';
import { fetchProductSSR } from 'store/product';
import { withPublic } from '@hocs';
import { CookieStorage, LocaleHelper } from '@helpers';

export const getServerSideProps = withPublic(
  wrapper.getServerSideProps((store) => async (ctx) => {
    const { locale: language, query } = ctx;

    const cookieStorage = new CookieStorage(ctx);
    const locale = new LocaleHelper(cookieStorage, language);

    const http = new Http(process.env.NEXT_PUBLIC_API_ROUTE, locale);
    const id = query.id as string;

    const { payload } = await store.dispatch(fetchProductSSR({ id, http }));
    console.log(payload);

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
  const router = useRouter();
  const create = router.query.create as string;

  return (
    <Layout title="Edit post">
      <SavePost edit create={create} />
    </Layout>
  );
};

export default EditPage;
