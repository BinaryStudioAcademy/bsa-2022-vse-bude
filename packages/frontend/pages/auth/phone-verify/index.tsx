import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withProtected } from '@hocs';
import { PhoneVerification } from '../../../components/auth/verification/phone-verification';
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

function PhoneVerificationPage() {
  return (
    <AuthLayout>
      <div css={contentWrapper}>
        <div css={formWrapper}>
          <PhoneVerification />
        </div>
      </div>
    </AuthLayout>
  );
}

export default PhoneVerificationPage;
