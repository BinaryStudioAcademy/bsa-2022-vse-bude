import React, { FC } from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { globalStyles } from '~/styles/styles';
import { LanguageButtons } from '../language-buttons/language-buttons';
import { DrawerMenu } from '../menu/drawer-menu';

const DrawerContent: FC = () => {
  return (
    <DrawerContentScrollView style={globalStyles.mt4}>
      <LanguageButtons />
      <DrawerMenu />
    </DrawerContentScrollView>
  );
};

export { DrawerContent };
