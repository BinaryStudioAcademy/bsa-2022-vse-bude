import React, { FC } from 'react';
import { useTranslation } from '~/hooks/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ColorPalette } from '@vse-bude/shared';
import { ButtonAppearance, RootScreenName } from '~/common/enums/enums';
import { RootNavigationParamList } from '~/common/types/types';
import {
  View,
  FlagBackgroundView,
  ScreenWrapper,
  StatusBar,
  LogoWhite,
  SecondaryButton,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { Product } from './components/components';
import { styles } from './styles';

type Props = NativeStackScreenProps<
  RootNavigationParamList,
  RootScreenName.MAIN
>;

const Welcome: FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <ScreenWrapper>
      <StatusBar
        backgroundColor={ColorPalette.BLUE_100}
        translucent={true}
        barStyle="light-content"
      />
      <FlagBackgroundView
        style={[
          globalStyles.flex1,
          globalStyles.alignItemsCenter,
          globalStyles.px5,
        ]}
      >
        <LogoWhite style={styles.logo} />
        <View style={globalStyles.py7}>
          <Product />
        </View>
        <View style={styles.buttonsWrapper}>
          <SecondaryButton
            label={t('verification.CREATE_ACCOUNT')}
            onPress={() => {
              navigation.navigate(RootScreenName.SIGN_UP);
            }}
          />
          <SecondaryButton
            appearance={ButtonAppearance.OUTLINED}
            label={t('verification.SING_IN')}
            onPress={() => {
              navigation.navigate(RootScreenName.SIGN_IN);
            }}
          />
        </View>
      </FlagBackgroundView>
    </ScreenWrapper>
  );
};

export { Welcome };
