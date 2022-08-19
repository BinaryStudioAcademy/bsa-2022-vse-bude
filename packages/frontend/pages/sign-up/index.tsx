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
    ...(await serverSideTranslations(locale, [
      'validation',
      'sign-up',
      'public-common',
    ])),
  },
});

export default function SignUpPage() {
  const { t } = useTranslation('sign-up');

  return (
    <AuthLayout>
      <div css={contentWrapper}>
        <div css={formWrapper}>
          <SignUpForm />
        </div>
        <div css={linkText}>
          {t('accountExist')}!{' '}
          <InternalLink
            variant="primary"
            label={`${t('signIn')}!`}
            href={Routes.SIGN_IN}
          />
        </div>
      </div>
    </AuthLayout>
  );
}
