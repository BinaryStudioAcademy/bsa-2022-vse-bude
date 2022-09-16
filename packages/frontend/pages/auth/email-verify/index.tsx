import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withProtected } from 'hocs';
import { EmailVerification } from '../../../components/auth/verification/email-verification';
import { AuthLayout } from '../../../components/authLayout';
import {
  contentWrapper,
  formWrapper,
} from '../../../components/auth/layout/styles';

export const getServerSideProps = withProtected(async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['auth', 'public', 'common'])),
  },
}));

function EmailVerificationPage() {
  return (
    <AuthLayout>
      <div css={contentWrapper}>
        <div css={formWrapper}>
          <EmailVerification showDescription />
        </div>
      </div>
    </AuthLayout>
  );
}

export default EmailVerificationPage;
