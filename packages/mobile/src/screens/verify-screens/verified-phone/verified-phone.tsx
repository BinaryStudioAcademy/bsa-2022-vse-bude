import React, { FC } from 'react';
import { useCustomTheme, useNavigation, useTranslation } from '~/hooks/hooks';
import {
  ArrowRightIcon,
  KeyboardAvoiding,
  PrimaryButton,
  View,
} from '~/components/components';
import { images } from '~/assets/images/images';
import { globalStyles } from '~/styles/styles';
import { RootNavigationProps } from '~/common/types/types';
import { MainScreenName, RootScreenName } from '~/common/enums/enums';
import { Header, Title, VerifyImage, Wrapper } from '../components/components';
import { styles } from './styles';

const VerifiedPhoneScreen: FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<RootNavigationProps>();
  const { colors } = useCustomTheme();

  const handleContinuePress = (): void => {
    navigation.navigate(RootScreenName.MAIN, {
      screen: MainScreenName.ACCOUNT_ROOT,
    });
  };

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
            label={t('verify.VERIFIED_TITLE_PHONE')}
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
