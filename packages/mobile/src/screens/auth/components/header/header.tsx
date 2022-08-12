import React, { FC } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Logo, View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { BackButton } from '../components';
import { styles } from './styles';

type Props = {
  onBack: () => void;
};

const Header: FC<Props> = ({ onBack }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0.4 }}
      end={{ x: 0, y: 0.9 }}
      colors={['#0C42A6', '#F4C50A']}
    >
      <View style={[styles.header, globalStyles.alignItemsCenter]}>
        <BackButton onBack={onBack} />
        <Logo />
      </View>
    </LinearGradient>
  );
};

export { Header };
