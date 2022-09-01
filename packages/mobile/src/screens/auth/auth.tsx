import React, { FC, ReactElement } from 'react';
import { ColorPalette, UserSignInDto, UserSignUpDto } from '@vse-bude/shared';
import {
  DataStatus,
  MainScreenName,
  RootScreenName,
} from '~/common/enums/enums';
import { auth as authActions } from '~/store/actions';
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
  Divider,
  ScreenWrapper,
  StatusBar,
  Spinner,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { NavigationProp } from '@react-navigation/native';
import { MainNavigationParamList } from '~/common/types/navigation/navigation';
import { selectUserActionDataStatus } from '~/store/selectors';
import {
  GoogleButton,
  SignInForm,
  SignUpForm,
  Header,
} from './components/components';
import { styles } from './styles';

const Auth: FC = () => {
  const { name } = useRoute();
  const dataStatus = useAppSelector(selectUserActionDataStatus);
  const dispatch = useAppDispatch();
  const { colors } = useCustomTheme();
  const { t } = useTranslation();
  const navigation: NavigationProp<MainNavigationParamList> = useNavigation();
  const screenLabel =
    name === RootScreenName.SIGN_IN
      ? t('verification.SING_IN')
      : t('verification.CREATE_ACCOUNT');

  const handleSignIn = (payload: UserSignInDto): void => {
    dispatch(authActions.signIn(payload));
    if (dataStatus == DataStatus.FULFILLED) {
      navigation.navigate(MainScreenName.HOME);
    }
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
  if (dataStatus == DataStatus.PENDING) {
    return <Spinner isOverflow={true} />;
  }

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
          {screenLabel}
        </Text>
        <GoogleButton />
        <Divider text={t('common:text.OR')} />
        {getScreen(name)}
      </ScrollView>
    </ScreenWrapper>
  );
};

export { Auth };
