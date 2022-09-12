import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withPublic } from '@hocs';
import { AuthLayout } from '../../components/authLayout';
import {
  contentWrapper,
  formWrapper,
} from '../../components/auth/layout/styles';
import { ForgotPassword } from '../../components/auth/forgot-password';

export const getServerSideProps = withPublic(async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['auth', 'common', 'public'])),
  },
}));

function ResetPasswordPage() {
  return (
    <AuthLayout>
      <div css={contentWrapper}>
        <div css={formWrapper}>
          <ForgotPassword />
        </div>
      </div>
    </AuthLayout>
  );
}

export default ResetPasswordPage;
