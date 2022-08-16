import React, { FC } from 'react';
import { useTranslation } from '~/hooks/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Button, Image, LinearGradient } from '~/components/components';
import { ColorPalette } from '@vse-bude/shared';
import { ButtonAppearance, RootScreenName } from '~/common/enums/enums';
import { RootNavigationParamList } from '~/common/types/types';
import { images } from '~/assets/images/images';
import { Product } from './components/components';
import { styles } from './styles';

type Props = NativeStackScreenProps<
  RootNavigationParamList,
  RootScreenName.MAIN
>;

const Welcome: FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <LinearGradient
      start={{ x: 0, y: 0.35 }}
      end={{ x: 0, y: 0.65 }}
      colors={[ColorPalette.BLUE_100, ColorPalette.YELLOW_200]}
      style={styles.wrapper}
    >
      <Image source={images.logo_small} style={styles.logo} />
      <View style={styles.stampWrapper}>
        <Product />
      </View>
      <View style={styles.buttonsWrapper}>
        <Button
          label={t('verification.CREATE_ACCOUNT')}
          background={ColorPalette.GREEN_200}
          onPress={() => {
            navigation.navigate(RootScreenName.SIGN_UP);
          }}
        />
        <Button
          label={t('verification.SING_IN')}
          view={ButtonAppearance.TRANSPARENT}
          textColor={ColorPalette.GREEN_200}
          onPress={() => {
            navigation.navigate(RootScreenName.SIGN_IN);
          }}
        />
      </View>
    </LinearGradient>
  );
};

export { Welcome };
