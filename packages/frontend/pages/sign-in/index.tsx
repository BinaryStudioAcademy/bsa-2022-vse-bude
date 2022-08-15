import { Layout } from '@components';
import { AuthLayout } from 'components/authLayout';
import Login from 'components/login/component';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function LoginPage() {
  return (
    // TODO: wrap in public route
    <Layout>
    <AuthLayout>
      <Login />
    </AuthLayout>
    </Layout>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['auth'])),
  },
});
