import { InternalLink } from 'components/primitives/link';
import { AuthLayout } from '../../components/authLayout/component';
import {
  contentWrapper,
  formWrapper,
  linkText,
} from '../../components/auth/layout/styles';
import { SignUpForm } from '../../components/auth/sign-up/component';

export default function SignUpPage() {
  return (
    <AuthLayout>
      <div css={contentWrapper}>
        <div css={formWrapper}>
          <SignUpForm />
        </div>
        <div css={linkText}>
          I have an account!{' '}
          <InternalLink variant="primary" label="Sign In" href={'/login'} />
        </div>
      </div>
    </AuthLayout>
  );
}
