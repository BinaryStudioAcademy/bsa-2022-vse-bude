import { AuthLayout } from 'components/authLayout';
import Login from 'components/login/component';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function LoginPage() {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['auth', 'public'])),
  },
});
