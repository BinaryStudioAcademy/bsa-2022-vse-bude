import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withProtected } from '@hocs';
import { Layout } from '@components/layout';
import { CheckoutPageInner } from '@components/order';

export const getServerSideProps = withProtected(async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['auth', 'public', 'common'])),
  },
}));

const CheckoutPage = () => (
  <Layout title={'Checkout'}>
    <CheckoutPageInner />
  </Layout>
);

export default CheckoutPage;
