import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { EmailVerification } from '../../../components/auth/verification/email-verification';
import { AuthLayout } from '../../../components/authLayout';
import {
  contentWrapper,
  formWrapper,
} from '../../../components/auth/layout/styles';

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['auth', 'public'])),
  },
});

export default function EmailVerificationPage() {
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
