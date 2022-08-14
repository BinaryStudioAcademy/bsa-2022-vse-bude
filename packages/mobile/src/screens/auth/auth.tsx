import React, { FC, ReactElement } from 'react';
import { UserSignUpDto } from '@vse-bude/shared';
import { RootScreenName } from '~/common/enums/enums';
import { auth as authActions } from '~/store/actions';
import {
  useAppDispatch,
  useCustomTheme,
  useRoute,
  useTranslation,
} from '~/hooks/hooks';
import { StatusBar, Text, View, ScrollView } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import {
  GoogleButton,
  Line,
  SignInForm,
  SignUpForm,
  Header,
} from './components/components';
import { styles } from './styles';

const Auth: FC = () => {
  const { name } = useRoute();
  const dispatch = useAppDispatch();
  const { colors } = useCustomTheme();
  const { t } = useTranslation();
  const screenLabel =
    name === RootScreenName.SIGN_IN
      ? t('verification.SING_IN')
      : t('verification.CREATE_ACCOUNT');

  const handleSignIn = (): void => {
    // TODO: handle sign in
  };

  const handleSignUp = (payload: UserSignUpDto): void => {
    dispatch(authActions.signUp(payload));
  };

  const handleGoBack = (): void => {
    // TODO: handle go back
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
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <Header
        labelButton={t('components.HEADER_BUTTON_BACK')}
        onPress={handleGoBack}
      />
      <ScrollView
        style={[
          styles.main,
          globalStyles.px5,
          { backgroundColor: colors.background },
        ]}
      >
        <Text
          style={[
            styles.title,
            { color: colors.titlePrimary },
            globalStyles.fs36,
            globalStyles.fontWeightExtraBold,
          ]}
        >
          {screenLabel}
        </Text>
        <GoogleButton />
        <Line />
        {getScreen(name)}
      </ScrollView>
    </View>
  );
};

export { Auth };
