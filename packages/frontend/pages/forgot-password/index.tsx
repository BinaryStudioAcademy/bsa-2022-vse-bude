import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withProtected } from '@hocs';
import { AuthLayout } from '../../components/authLayout';
import {
  contentWrapper,
  formWrapper,
} from '../../components/auth/layout/styles';
import { ForgotPassword } from '../../components/auth/reset-password';

export const getServerSideProps = withProtected(async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['auth', 'common'])),
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
