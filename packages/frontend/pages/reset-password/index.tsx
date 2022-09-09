import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withPublic } from '@hocs';
import { AuthLayout } from '../../components/authLayout';
import {
  contentWrapper,
  formWrapper,
} from '../../components/auth/layout/styles';
import { ResetPassword } from '../../components/auth/reset-password';

export const getServerSideProps = withPublic(async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['auth', 'common', 'public'])),
  },
}));

function UpdatePasswordPage() {
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

export default UpdatePasswordPage;
