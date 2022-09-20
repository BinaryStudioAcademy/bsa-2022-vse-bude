import React, { FC } from 'react';
import { useNavigation, useTranslation, useAppSelector } from '~/hooks/hooks';
import {
  KeyboardAvoiding,
  PrimaryButton,
  Spinner,
  View,
} from '~/components/components';
import { images } from '~/assets/images/images';
import { globalStyles } from '~/styles/styles';
import { RootNavigationProps } from '~/common/types/types';
import { Header } from '~/screens/components/components';
import {
  DataStatus,
  MainScreenName,
  RootScreenName,
} from '~/common/enums/enums';
import { selectAuthDataStatus, selectCurrentUser } from '~/store/selectors';
import { Title, VerifyImage, Wrapper } from '../components/components';
import { styles } from './styles';

const VerifiedEmailScreen: FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<RootNavigationProps>();
  const user = useAppSelector(selectCurrentUser);
  const dataStatusAuth = useAppSelector(selectAuthDataStatus);
  const isLoading = dataStatusAuth === DataStatus.PENDING;
  const verifiedTitle =
    user?.emailVerified && user?.phoneVerified
      ? t('verify.VERIFIED_FULLY')
      : t('verify.VERIFIED_TITLE_EMAIL');

  const handleContinuePress = (): void => {
    navigation.navigate(RootScreenName.MAIN, {
      screen: MainScreenName.ACCOUNT_ROOT,
    });
  };

  if (isLoading) {
    return <Spinner isOverflow={true} />;
  }

  return (
    <Wrapper>
      <Header title={t('verify.VERIFY')} hideButton={true} />
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
            />
          </View>
        </View>
      </KeyboardAvoiding>
    </Wrapper>
  );
};

export { VerifiedEmailScreen };
