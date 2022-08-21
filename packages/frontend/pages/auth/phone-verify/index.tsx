import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withProtected } from '@helpers';
import { PhoneVerification } from '../../../components/auth/verification/phone-verification';
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
