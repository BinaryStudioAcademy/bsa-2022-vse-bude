import React, { FC } from 'react';
import { View, TouchableOpacity } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { useNavigation } from '~/hooks/hooks';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerNavigationParamList } from '~/common/types/types';
import { styles } from './styles';

const BurgerMenu: FC = () => {
  const navigation =
    useNavigation<DrawerNavigationProp<DrawerNavigationParamList>>();
  const onPress = () => {
    navigation.toggleDrawer();
  };

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
