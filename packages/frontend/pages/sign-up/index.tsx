import { Routes } from '@enums';
import { InternalLink } from 'components/primitives/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withPublic } from '@hocs';
import { AuthLayout } from '../../components/authLayout';
import {
  contentWrapper,
  formWrapper,
  linkText,
} from '../../components/auth/layout/styles';
import { SignUpForm } from '../../components/auth/sign-up/component';

export const getServerSideProps = withPublic(async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'public',
      'auth',
      'personal-info',
      'common',
    ])),
  },
}));

const SignUpPage = () => {
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
};

export default SignUpPage;
