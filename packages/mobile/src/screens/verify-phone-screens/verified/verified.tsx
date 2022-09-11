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
import { RootScreenName } from '~/common/enums/enums';
import { Header, Title, VerifyImage, Wrapper } from '../components/components';
import { styles } from './styles';

const VerifiedScreen: FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<RootNavigationProps>();
  const { colors } = useCustomTheme();

  const handleContinuePress = (): void => {
    navigation.navigate(RootScreenName.ACCOUNT_ROOT);
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
            label={t('verificationPhone.VERIFIED_TITLE')}
            contentContainerStyle={[globalStyles.mt6, { marginTop: 75 }]}
            textStyle={{ textAlign: 'center' }}
          />
          <View style={styles.buttonContainer}>
            <PrimaryButton
              label={t('verificationPhone.CONTINUE')}
              onPress={handleContinuePress}
              iconRight={<ArrowRightIcon size={24} color={colors.whiteColor} />}
            />
          </View>
        </View>
      </KeyboardAvoiding>
    </Wrapper>
  );
};

export { VerifiedScreen };
