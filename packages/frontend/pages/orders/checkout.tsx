import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { wrapper } from 'store';
import { withPublic } from '@hocs';
import { Layout } from '@components/layout';
import { CheckoutPageInner } from '@components/order';

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
  <Layout title={'Checkout'}>
    <CheckoutPageInner />
  </Layout>
);

export default CheckoutPage;
