import React, { FC } from 'react';
import {
  useCustomTheme,
  useNavigation,
  useTranslation,
  useAppSelector,
} from '~/hooks/hooks';
import {
  ArrowRightIcon,
  KeyboardAvoiding,
  PrimaryButton,
  Spinner,
  View,
} from '~/components/components';
import { images } from '~/assets/images/images';
import { globalStyles } from '~/styles/styles';
import { PropsVerifyScreens, RootNavigationProps } from '~/common/types/types';
import {
  DataStatus,
  MainScreenName,
  RootScreenName,
} from '~/common/enums/enums';
import { selectAuthDataStatus, selectCurrentUser } from '~/store/selectors';
import { Header, Title, VerifyImage, Wrapper } from '../components/components';
import { styles } from './styles';

const VerifiedPhoneScreen: FC<PropsVerifyScreens> = ({ route }) => {
  const fromSignUp = route.params?.fromSignUp;
  const { t } = useTranslation();
  const navigation = useNavigation<RootNavigationProps>();
  const { colors } = useCustomTheme();
  const user = useAppSelector(selectCurrentUser);
  const dataStatusAuth = useAppSelector(selectAuthDataStatus);
  const isLoading = dataStatusAuth === DataStatus.PENDING;
  const verifiedTitle =
    user?.emailVerified && user.phoneVerified
      ? t('verify.VERIFIED_FULLY')
      : t('verify.VERIFIED_TITLE_PHONE');

  const handleContinuePress = (): void => {
    if (fromSignUp) {
      navigation.navigate(RootScreenName.VERIFY_EMAIL, {
        fromSignUp,
      });
    } else {
      navigation.navigate(RootScreenName.MAIN, {
        screen: MainScreenName.ACCOUNT_ROOT,
      });
    }
  };

  if (isLoading) {
    return <Spinner isOverflow={true} />;
  }

  return (
    <Wrapper>
      <Header hideButton={true} />
      <KeyboardAvoiding>
        <View style={globalStyles.px5}>
          <VerifyImage
            source={images.verified}
            contentContainerStyle={globalStyles.mt6}
          />
          <Title
            label={verifiedTitle}
            contentContainerStyle={[globalStyles.mt6, { marginTop: 75 }]}
            textStyle={{ textAlign: 'center' }}
          />
          <View style={styles.buttonContainer}>
            <PrimaryButton
              label={t('verify.CONTINUE')}
              onPress={handleContinuePress}
              iconRight={<ArrowRightIcon size={24} color={colors.whiteColor} />}
            />
          </View>
        </View>
      </KeyboardAvoiding>
    </Wrapper>
  );
};

export { VerifiedPhoneScreen };
