import React, { FC } from 'react';
import { TouchableOpacity, View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { styles } from './styles';

type Props = {
  onPress: () => void;
};

const BurgerMenuButton: FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.wrapper, globalStyles.justifyContentSpaceBetween]}
      onPress={() => onPress()}
    >
      <View style={styles.bar} />
      <View style={[styles.bar, styles.barMiddle]} />
      <View style={styles.bar} />
    </TouchableOpacity>
  );
};
export { BurgerMenuButton };
