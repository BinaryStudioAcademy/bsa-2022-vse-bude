import { Routes } from '@enums';
import { InternalLink } from 'components/primitives/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { AuthLayout } from '../../components/authLayout';
import {
  contentWrapper,
  formWrapper,
  linkText,
} from '../../components/auth/layout/styles';
import { SignUpForm } from '../../components/auth/sign-up/component';

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['validation', 'common'])),
  },
});

export default function SignUpPage() {
  const { t } = useTranslation('common');

  return (
    <AuthLayout>
      <div css={contentWrapper}>
        <div css={formWrapper}>
          <SignUpForm />
        </div>
        <div css={linkText}>
          {t('I_HAVE_AN_ACCOUNT')}!{' '}
          <InternalLink
            variant="primary"
            label={`${t('SIGN_IN')}!`}
            href={Routes.SIGN_IN}
          />
        </div>
      </div>
    </AuthLayout>
  );
}
