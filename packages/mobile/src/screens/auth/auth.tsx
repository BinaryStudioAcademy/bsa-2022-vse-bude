import React, { FC, ReactElement } from 'react';
import { NavigationProp } from '@react-navigation/native';
import {
  ColorPalette,
  ResetPasswordLink,
  UserSignInDto,
  UserSignUpDto,
} from '@vse-bude/shared';
import { auth as authActions } from '~/store/actions';
import { selectAuthDataStatus } from '~/store/selectors';
import {
  DataStatus,
  MainScreenName,
  RootScreenName,
} from '~/common/enums/enums';
import {
  RootNavigationProps,
  MainNavigationParamList,
} from '~/common/types/types';
import {
  useAppDispatch,
  useCustomTheme,
  useRoute,
  useTranslation,
  useNavigation,
  useAppSelector,
} from '~/hooks/hooks';
import {
  Text,
  ScrollView,
  ScreenWrapper,
  StatusBar,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
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
  const dataStatus = useAppSelector(selectAuthDataStatus);
  const { colors } = useCustomTheme();
  const { t } = useTranslation();

  const navigation = useNavigation<RootNavigationProps>();
  const redirect =
    useNavigation<
      NavigationProp<Pick<MainNavigationParamList, MainScreenName.HOME>>
    >();
  const isResetPassword = name === RootScreenName.FORGOT_PASSWORD;
  const isLoginSuccess = dataStatus == DataStatus.FULFILLED;

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
    if (isLoginSuccess) {
      redirect.navigate(MainScreenName.HOME);
    }
  };

  const handleSignUp = (payload: UserSignUpDto): void => {
    dispatch(authActions.signUp(payload))
      .unwrap()
      .then(() => {
        navigation.navigate(RootScreenName.VERIFY_PHONE);
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.warn(err);
      });
  };

  const handleResetPassword = (payload: ResetPasswordLink): void => {
    dispatch(authActions.resetPassword(payload));
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
      case RootScreenName.FORGOT_PASSWORD: {
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
