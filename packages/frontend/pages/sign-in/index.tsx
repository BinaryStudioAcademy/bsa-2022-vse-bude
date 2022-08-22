import { AuthLayout } from 'components/authLayout';
import Login from 'components/login/component';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withPublic } from '@helpers';

const LoginPage = () => (
  <AuthLayout>
    <Login />
  </AuthLayout>
);

export const getServerSideProps = withPublic(async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['auth'])),
  },
}));

export default LoginPage;
