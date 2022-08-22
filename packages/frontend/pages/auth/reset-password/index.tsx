import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withProtected } from '@helpers';
import { AuthLayout } from '../../../components/authLayout';
import {
  contentWrapper,
  formWrapper,
} from '../../../components/auth/layout/styles';
import { ResetPassword } from '../../../components/auth/reset-password/component';

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
          <ResetPassword />
        </div>
      </div>
    </AuthLayout>
  );
}

export default ResetPasswordPage;
