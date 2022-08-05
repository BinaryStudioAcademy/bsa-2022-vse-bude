import React, { FC, ReactElement } from 'react';
import { UserSignUpDto } from '@vse-bude/shared';

import { auth as authActions } from '~/store/actions';
import { useAppDispatch, useRoute } from '~/hooks/hooks';
import { SignInForm, SignUpForm } from './components/components';
import { RootScreenName } from '~/common/enums/enums';

const Auth: FC = () => {
  const { name } = useRoute();
  const dispatch = useAppDispatch();

  const handleSignIn = (): void => {
    // TODO: handle sign in
  };

  const handleSignUp = (payload: UserSignUpDto): void => {
    dispatch(authActions.signUp(payload));
  };

  const getScreen = (screen: string): ReactElement | null => {
    switch (screen) {
      case RootScreenName.SIGN_IN: {
        return <SignInForm onSubmit={handleSignIn} />;
      }
      case RootScreenName.SIGN_UP: {
        return <SignUpForm onSubmit={handleSignUp} />;
      }
    }

    return null;
  };

  return <>{getScreen(name)}</>;
};

export { Auth };
