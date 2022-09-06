import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { wrapper } from 'store';
import { withPublic } from '@hocs';
import { Layout } from '@components/layout';

export const getStaticProps = withPublic(
  wrapper.getServerSideProps(() => async (ctx) => {
    const { locale } = ctx;

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  }),
);

const CheckoutPage = () => (
  <Layout title={'Payment successful'}>Payment successful</Layout>
);

export default CheckoutPage;
