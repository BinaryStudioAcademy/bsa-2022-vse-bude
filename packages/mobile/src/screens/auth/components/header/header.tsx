import React, { FC } from 'react';
import { images } from '~/assets/images/images';
import {
  LinearGradient,
  View,
  HeaderButton,
  Image,
} from '~/components/components';
import { useCustomTheme } from '~/hooks/hooks';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  labelButton: string;
  onPress: () => void;
};

const Header: FC<Props> = ({ labelButton, onPress }) => {
  const { colors } = useCustomTheme();

  return (
    <LinearGradient
      start={{ x: 0, y: 0.4 }}
      end={{ x: 0, y: 0.9 }}
      colors={[colors.flagTop, colors.flagBottom]}
    >
      <View style={styles.header}>
        <HeaderButton label={labelButton} onPress={onPress} />
        <View style={globalStyles.alignItemsCenter}>
        <Image source={images.logo_small} style={styles.logo} />
        </View>
      </View>
    </LinearGradient>
  );
};

export { Header };
