import React, { FC } from 'react';
import {
  Logo,
  View,
  HeaderButton,
  FlagBackgroundView,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  labelButton: string;
  onPress: () => void;
};

const Header: FC<Props> = ({ labelButton, onPress }) => {
  return (
    <FlagBackgroundView style={styles.header}>
      <HeaderButton label={labelButton} onPress={onPress} />
      <View style={globalStyles.alignItemsCenter}>
        <Logo />
      </View>
    </FlagBackgroundView>
  );
};

export { Header };
