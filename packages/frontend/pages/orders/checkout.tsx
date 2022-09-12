import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withProtected } from '@hocs';
import { Layout } from '@components/layout';
import { CheckoutPageInner } from '@components/order';
import { useTranslation } from 'next-i18next';

export const getServerSideProps = withProtected(async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['public', 'common', 'checkout'])),
  },
}));

const CheckoutPage = () => {
  const { t } = useTranslation('checkout');

  return (
    <Layout title={t('TITLE')}>
      <CheckoutPageInner />
    </Layout>
  );
};

export default CheckoutPage;
