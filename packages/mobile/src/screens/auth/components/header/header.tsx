import React, { FC } from 'react';
import {
  View,
  HeaderButton,
  FlagBackgroundView,
  LogoWhite,
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
        <LogoWhite />
      </View>
    </FlagBackgroundView>
  );
};

export { Header };
