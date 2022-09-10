import React, { FC, ReactElement } from 'react';
import {
  ColorPalette,
  ResetPasswordLink,
  UserSignInDto,
  UserSignUpDto,
} from '@vse-bude/shared';
import { RegistrationScreenName } from '~/common/enums/enums';
import { auth as authActions } from '~/store/actions';
import {
  useAppDispatch,
  useCustomTheme,
  useRoute,
  useTranslation,
  useNavigation,
} from '~/hooks/hooks';
import {
  Text,
  ScrollView,
  ScreenWrapper,
  StatusBar,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { RegistrationNavigationProps } from '~/common/types/navigation/navigation-props';
import {
  ResetPasswordHeader,
  SignInUpHeader,
  SignInForm,
  SignUpForm,
  Header,
  ResetPassword,
} from './components/components';
import { styles } from './styles';

const Auth: FC = () => {
  const { name } = useRoute();
  const dispatch = useAppDispatch();
  const { colors } = useCustomTheme();
  const { t } = useTranslation();
  const navigation = useNavigation<RegistrationNavigationProps>();
  const isResetPassword = name === RegistrationScreenName.FORGOT_PASSWORD;

  const getScreenLabel = (screenName: string): string => {
    switch (screenName) {
      case RegistrationScreenName.SIGN_IN:
        return t('verification.SING_IN');
      case RegistrationScreenName.SIGN_UP:
        return t('verification.CREATE_ACCOUNT');
      case RegistrationScreenName.FORGOT_PASSWORD:
        return t('verification.FORGOT_PASSWORD');
      default:
        return '';
    }
  };

  const handleSignIn = (payload: UserSignInDto): void => {
    dispatch(authActions.signIn(payload));
  };

  const handleSignUp = (payload: UserSignUpDto): void => {
    dispatch(authActions.signUp(payload));
  };

  const handleResetPassword = (payload: ResetPasswordLink): void => {
    dispatch(authActions.resetPassword(payload));
  };

  const handleGoBack = (): void => {
    navigation.goBack();
  };

  const getScreen = (screen: string): ReactElement | null => {
    switch (screen) {
      case RegistrationScreenName.SIGN_IN: {
        return <SignInForm onSubmit={handleSignIn} />;
      }
      case RegistrationScreenName.SIGN_UP: {
        return <SignUpForm onSubmit={handleSignUp} />;
      }
      case RegistrationScreenName.FORGOT_PASSWORD: {
        return <ResetPassword onSubmit={handleResetPassword} />;
      }
    }

    return null;
  };

  return (
    <ScreenWrapper>
      <StatusBar
        backgroundColor={ColorPalette.BLUE_100}
        translucent={true}
        barStyle="light-content"
      />
      <Header
        labelButton={t('common:components.HEADER_BUTTON_BACK')}
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
          {getScreenLabel(name)}
        </Text>
        {isResetPassword ? <ResetPasswordHeader /> : <SignInUpHeader />}
        {getScreen(name)}
      </ScrollView>
    </ScreenWrapper>
  );
};

export { Auth };
