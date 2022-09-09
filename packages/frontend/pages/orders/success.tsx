import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { wrapper } from 'store';
import { withPublic } from '@hocs';
import { Layout } from '@components/layout';
import { useTranslation } from 'next-i18next';
import { OrderSuccessPageInner } from '@components/order/success';

export const getStaticProps = withPublic(
  wrapper.getServerSideProps(() => async (ctx) => {
    const { locale } = ctx;

    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'auth',
          'public',
          'common',
          'checkout',
        ])),
      },
    };
  }),
);

const CheckoutPage = () => {
  const { t } = useTranslation('checkout');

  return (
    <Layout title={t('PAYMENT_SUCCESSFUL')}>
      <OrderSuccessPageInner />
    </Layout>
  );
};

export default CheckoutPage;
