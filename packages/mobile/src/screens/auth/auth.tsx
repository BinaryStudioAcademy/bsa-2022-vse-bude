import React, { FC, ReactElement } from 'react';
import { ColorPalette, UserSignInDto, UserSignUpDto } from '@vse-bude/shared';
import { RootScreenName } from '~/common/enums/enums';
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
import {
  ForgotPasswordHeader,
  SignInUpHeader,
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
  const navigation = useNavigation();
  const isForgotPassword = name === RootScreenName.FORGOT_PASSWORD;

  const getScreenLabel = (screenName: string): string => {
    switch (screenName) {
      case RootScreenName.SIGN_IN:
        return t('verification.SING_IN');
      case RootScreenName.SIGN_UP:
        return t('verification.CREATE_ACCOUNT');
      case RootScreenName.FORGOT_PASSWORD:
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

  const handleGoBack = (): void => {
    navigation.goBack();
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
        {isForgotPassword ? <ForgotPasswordHeader /> : <SignInUpHeader />}
        {getScreen(name)}
      </ScrollView>
    </ScreenWrapper>
  );
};

export { Auth };
