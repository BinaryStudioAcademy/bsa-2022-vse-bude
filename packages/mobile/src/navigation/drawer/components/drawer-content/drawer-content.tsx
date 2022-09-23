import React, { FC } from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';

import { Logo, View } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { DrawerMenu } from '../menu/drawer-menu';
import { LanguageButtons } from '../language-buttons/language-buttons';

const DrawerContent: FC = () => {
  const { colors } = useTheme();

  return (
    <DrawerContentScrollView style={{ backgroundColor: colors.background }}>
      <View style={[globalStyles.alignItemsCenter, globalStyles.py4]}>
        <Logo width={150} height={50} />
      </View>
      <LanguageButtons />
      <DrawerMenu />
    </DrawerContentScrollView>
  );
};

export { DrawerContent };
