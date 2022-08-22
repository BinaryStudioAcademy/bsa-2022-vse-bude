import { Routes } from '@enums';
import { InternalLink } from 'components/primitives/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AuthLayout } from '../../components/authLayout';
import {
  contentWrapper,
  formWrapper,
  linkText,
} from '../../components/auth/layout/styles';
import { SignUpForm } from '../../components/auth/sign-up/component';

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['validation', 'public', 'auth'])),
  },
});

export default function SignUpPage() {
  const { t } = useTranslation();

  return (
    <AuthLayout>
      <div css={contentWrapper}>
        <div css={formWrapper}>
          <SignUpForm />
        </div>
        <div css={linkText}>
          {t('auth:sign-up.accountExist')}!{' '}
          <InternalLink
            variant="primary"
            label={`${t('auth:sign-up.signIn')}!`}
            href={Routes.SIGN_IN}
          />
        </div>
      </div>
    </AuthLayout>
  );
}
