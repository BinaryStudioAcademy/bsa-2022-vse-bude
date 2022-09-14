import React, { FC } from 'react';
import { View, TouchableOpacity } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  onPress: () => void;
};

const BurgerMenu: FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.wrapper, globalStyles.justifyContentSpaceBetween]}
      onPress={onPress}
    >
      <View style={styles.bar} />
      <View style={[styles.bar, styles.barMiddle]} />
      <View style={styles.bar} />
    </TouchableOpacity>
  );
};

export { BurgerMenu };
