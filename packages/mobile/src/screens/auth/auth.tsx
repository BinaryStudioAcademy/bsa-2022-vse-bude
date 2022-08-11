import React, { FC, ReactElement } from 'react';
import { UserSignUpDto } from '@vse-bude/shared';

import { auth as authActions } from '~/store/actions';
import { useAppDispatch, useRoute } from '~/hooks/hooks';
import { RootScreenName } from '~/common/enums/enums';
import { ScreenWrapper, View } from '~/components/components';
import { Logo } from '~/components/logo/logo';
import { SignInForm, SignUpForm } from './components/components';

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

  return (
    <ScreenWrapper>
      <View>
        <Logo />
      </View>
      {getScreen(name)}
    </ScreenWrapper>
  );
};

export { Auth };
