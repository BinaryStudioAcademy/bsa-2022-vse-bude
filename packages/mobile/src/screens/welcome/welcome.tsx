import React, { FC } from 'react';
import { useTranslation, useNavigation } from '~/hooks/hooks';
import { ColorPalette } from '@vse-bude/shared';
import { ButtonAppearance, RegistrationScreenName } from '~/common/enums/enums';
import { RegistrationNavigationProps } from '~/common/types/types';
import {
  View,
  FlagBackgroundView,
  ScreenWrapper,
  StatusBar,
  LogoWhite,
  SecondaryButton,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { Stamp } from './components/components';
import { styles } from './styles';

const Welcome: FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<RegistrationNavigationProps>();

  return (
    <ScreenWrapper>
      <StatusBar
        backgroundColor={ColorPalette.BLUE_100}
        translucent={true}
        barStyle="light-content"
      />
      <FlagBackgroundView
        start={{ x: 0, y: 0.45 }}
        end={{ x: 0, y: 0.55 }}
        style={[
          globalStyles.flex1,
          globalStyles.alignItemsCenter,
          globalStyles.px5,
        ]}
      >
        <LogoWhite style={styles.logo} />
        <View style={styles.stampWrapper}>
          <Stamp />
        </View>
        <View style={styles.buttonsWrapper}>
          <SecondaryButton
            label={t('verification.CREATE_ACCOUNT')}
            onPress={() => {
              navigation.navigate(RegistrationScreenName.SIGN_UP);
            }}
          />
          <SecondaryButton
            appearance={ButtonAppearance.OUTLINED}
            label={t('verification.SING_IN')}
            onPress={() => {
              navigation.navigate(RegistrationScreenName.SIGN_IN);
            }}
          />
        </View>
      </FlagBackgroundView>
    </ScreenWrapper>
  );
};

export { Welcome };
