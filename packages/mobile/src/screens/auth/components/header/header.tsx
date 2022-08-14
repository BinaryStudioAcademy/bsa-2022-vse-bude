import React, { FC } from 'react';
import {
  LinearGradient,
  Logo,
  View,
  HeaderButton,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  labelButton: string;
  onPress: () => void;
};

const Header: FC<Props> = ({ labelButton, onPress }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0.4 }}
      end={{ x: 0, y: 0.9 }}
      colors={['#0C42A6', '#F4C50A']}
    >
      <View style={[styles.header, globalStyles.alignItemsCenter]}>
        <HeaderButton label={labelButton} onPress={onPress} />
        <Logo />
      </View>
    </LinearGradient>
  );
};

export { Header };
