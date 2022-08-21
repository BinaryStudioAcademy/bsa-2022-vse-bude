import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withProtected } from '@helpers';
import { EmailVerification } from '../../../components/auth/verification/email-verification';
import { AuthLayout } from '../../../components/authLayout/component';
import {
  contentWrapper,
  formWrapper,
} from '../../../components/auth/layout/styles';

export const getServerSideProps = withProtected(async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['auth'])),
  },
}));

function EmailVerificationPage() {
  return (
    <AuthLayout>
      <div css={contentWrapper}>
        <div css={formWrapper}>
          <EmailVerification />
        </div>
      </div>
    </AuthLayout>
  );
}

export default EmailVerificationPage;
